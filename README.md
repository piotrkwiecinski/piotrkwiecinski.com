# PiotrKwiecinski.com Website

The codebase for [piotrkwiecinski.com](https://piotrkwiecinski.com/).

Built with [Hugo](https://gohugo.io/) and plain CSS, no external theme.

## Development

### Prerequisites

- [Nix](https://nixos.org/) with flakes enabled (recommended)
- Or: Hugo (extended not required)

### Using Nix (recommended)

```bash
# Enter the development shell (or let direnv do it via .envrc)
nix develop

# Start the development server
hugo server
```

The site will be available at `http://localhost:1313`.

The dev shell provides `hugo`, `aws` (awscli2) and `treefmt`. Format the
code with:

```bash
nix fmt
```

## Build

```bash
nix develop -c hugo --minify
```

The output is written to `public/`. Alternatively, `nix build` produces the
same site in `./result`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`):

- **Pull requests** to `master`: format check (`nix fmt -- --fail-on-change`)
  and a Hugo build.
- **Push to `master`**: build with `hugo --minify`, then
  `aws s3 sync public/ s3://$S3_BUCKET_NAME/ --delete` and a CloudFront
  invalidation of `/*`.

AWS access uses GitHub OIDC (`aws-actions/configure-aws-credentials`), so no
long-lived keys are stored. The bucket and CloudFront distribution are
managed in Terraform outside this repository.

Required GitHub repository secrets:

| Secret                       | Value                                    |
| ---------------------------- | ---------------------------------------- |
| `AWS_ROLE_ARN`               | IAM role to assume via OIDC              |
| `AWS_REGION`                 | AWS region used for the API calls        |
| `S3_BUCKET_NAME`             | Website bucket name                      |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution serving the site |

The role's trust policy must allow
`repo:piotrkwiecinski/piotrkwiecinski.com:ref:refs/heads/master`.

## Project Structure

```
.
├── archetypes/          # Content templates
├── assets/css/          # Stylesheets (minified and fingerprinted by Hugo)
├── content/             # Page content (_index.md is the landing page)
├── layouts/
│   ├── _partials/       # head, footer
│   ├── baseof.html      # Base template
│   ├── home.html        # Landing page
│   └── 404.html
├── static/              # Copied as-is (favicon, robots.txt)
├── hugo.toml            # Hugo configuration (title, profile links)
└── flake.nix            # Nix dev shell, package and formatter
```

## License

Licensed under the [MIT License](./LICENSE).
