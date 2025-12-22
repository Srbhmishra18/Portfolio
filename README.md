# Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Vite, styled with Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Git.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/repo-name.git
    cd repo-name
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Local Development

To run the project locally:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment to GitHub Pages

1.  **Configure `vite.config.ts`**:
    Open `vite.config.ts` and verify the `base` property.
    *   If your repository is `https://github.com/username/portfolio`, set `base: '/portfolio/'`.
    *   If your repository is `https://github.com/username/username.github.io`, set `base: '/'`.

2.  **Deploy**:
    Run the deployment script:
    ```bash
    npm run deploy
    ```
    This script will:
    *   Build the project (compile TypeScript and React).
    *   Push the build folder (`dist`) to the `gh-pages` branch on GitHub.

3.  **GitHub Settings**:
    *   Go to your repository on GitHub.
    *   Go to **Settings** > **Pages**.
    *   Ensure the source is set to **Deploy from a branch** and select `gh-pages` / `/ (root)`.

## Contact Form Setup

The contact form is configured to use Google Apps Script. 
1.  Create a Google Sheet.
2.  Add columns: `Date`, `Name`, `Email`, `Message`.
3.  Go to **Extensions** > **Apps Script**.
4.  Paste the script provided in the documentation or `Contact.tsx`.
5.  Deploy as Web App (Execute as: Me, Who has access: Anyone).
6.  Paste the generated URL into `Contact.tsx` variable `GOOGLE_SCRIPT_URL`.
