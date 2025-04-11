#!/bin/bash

# Build the Next.js application
echo "Building the Next.js application..."
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Aborting deployment."
  exit 1
fi

echo "Build successful!"
echo "To deploy to Cloudflare Pages:"
echo "1. Push your code to a Git repository"
echo "2. Connect your repository to Cloudflare Pages"
echo "3. Configure the build settings as described in CLOUDFLARE_DEPLOYMENT.md"
echo "4. Click 'Save and Deploy'"

# If you have the Cloudflare Wrangler CLI installed, you can use it for deployment
if command -v wrangler &> /dev/null; then
  echo ""
  echo "Alternatively, you can deploy using Wrangler CLI:"
  echo "wrangler pages publish .next --project-name=teddystraler"
fi
