# =============================================================
#  Rehman Industry - one-click deploy to Cloudflare Workers
#  Just run this file in PowerShell from inside this folder:
#       powershell -ExecutionPolicy Bypass -File .\deploy.ps1
#  (the -ExecutionPolicy Bypass avoids the "scripts disabled" error)
#
#  One-time before first run: log in to Cloudflare with
#       npx wrangler login
# =============================================================

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host "[1/3] Installing dependencies (this can take a minute)..." -ForegroundColor Cyan
npm install

Write-Host "[2/3] Building the site for Cloudflare..." -ForegroundColor Cyan
npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion

Write-Host "[3/3] Deploying to Cloudflare Workers..." -ForegroundColor Cyan
npx wrangler deploy

Write-Host ""
Write-Host "Done. Live at https://rehmanindustry.com" -ForegroundColor Green
