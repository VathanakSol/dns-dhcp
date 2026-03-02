# DNS & DHCP — Sysadmin Beginner Guide

A static educational website that explains DNS and DHCP basics for beginners, with examples for Active Directory environments.

## Tech Stack

- HTML
- CSS
- JavaScript
- Nginx (for containerized serving)
- Docker

## Project Structure

- `index.html` — Main page content
- `styles.css` — Styling
- `script.js` — Tab switching logic
- `Dockerfile` — Production container setup

## Run Locally (Without Docker)

1. Open `index.html` in your browser.
2. Or run a local static server (optional) if you prefer.

## Run with Docker

### Build image

```bash
docker build -t dns-dhcp-site:latest .
```

### Run container

```bash
docker run -d --name dns-dhcp-site -p 8080:80 dns-dhcp-site:latest
```

### Open in browser

- http://localhost:8080

### Stop and remove container

```bash
docker stop dns-dhcp-site
docker rm dns-dhcp-site
```

---

## Deploy on Railway (Using Dockerfile)

Railway can build directly from your repository using the existing `Dockerfile`.

### Prerequisites

- A Railway account: https://railway.app
- Your project pushed to GitHub/GitLab
- Dockerfile committed to your repository

### Deployment Steps

1. Go to Railway dashboard.
2. Click **New Project**.
3. Choose **Deploy from GitHub repo** (or your Git provider).
4. Select this repository.
5. Railway detects the `Dockerfile` and starts building.
6. Wait for build and deploy to finish.
7. Open the service, go to **Settings** → **Networking**.
8. Generate a public domain.
9. Visit the generated Railway URL.

### Important Notes

- No environment variables are required for this project.
- The container serves content on port `80` (already declared with `EXPOSE 80`).
- On every new push to your connected branch, Railway can auto-redeploy.

### Optional: Manual Redeploy

From the Railway service page, click **Deployments** and trigger a redeploy if needed.

---

## Troubleshooting

### Build fails on Railway

- Confirm `Dockerfile`, `index.html`, `styles.css`, and `script.js` are in repository root.
- Confirm there are no typos in file names (case-sensitive on Linux).

### Site loads but styles/scripts missing

- Verify `index.html` references `styles.css` and `script.js` correctly.
- Verify those files are copied in `Dockerfile`.

### Container runs locally but not accessible

- Make sure you mapped ports correctly: `-p 8080:80`.
- Check Docker logs:

```bash
docker logs dns-dhcp-site
```

---