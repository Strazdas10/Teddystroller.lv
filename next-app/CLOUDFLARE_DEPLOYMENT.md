# Deploying to Cloudflare Pages

This guide will help you deploy your Next.js website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect your Git repository to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Navigate to "Pages"
3. Click "Create a project"
4. Select your Git provider (GitHub, GitLab, or Bitbucket)
5. Authorize Cloudflare to access your repositories
6. Select the repository containing your Next.js project

### 2. Configure your build settings

Use the following settings:

- **Project name**: teddystraler (or your preferred name)
- **Production branch**: main (or your main branch)
- **Build command**: npm run build
- **Build output directory**: .next
- **Root directory**: / (or the directory containing your Next.js project if not the root)

### 3. Environment variables (if needed)

If your project requires environment variables, add them in the "Environment variables" section.

### 4. Deploy

Click "Save and Deploy" to start the deployment process.

## Custom Domain Setup

After your site is deployed, you can add a custom domain:

1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain (e.g., teddystraler.lv)
4. Follow the instructions to verify domain ownership and set up DNS records

## Continuous Deployment

Cloudflare Pages will automatically deploy your site when you push changes to your repository.

## Additional Configuration

- **Headers and redirects**: The project includes `_headers` and `_redirects` files in the `public` directory for custom headers and redirects.
- **Cloudflare Pages configuration**: The project includes a `_cloudflare/pages.json` file in the `public` directory for additional Cloudflare Pages configuration.

## Troubleshooting

If you encounter issues during deployment:

1. Check the build logs for errors
2. Verify your build command and output directory
3. Ensure all required environment variables are set
4. Check that your Next.js configuration is compatible with Cloudflare Pages

For more information, visit the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).
