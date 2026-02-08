# Deploying to Vercel (Preview + Comments → GitHub Issues)

This guide walks you through getting the site on Vercel for temporary/preview deployments and using Vercel Comments with the GitHub Issues integration so reviewers can highlight, comment, and capture feedback as GitHub issues.

---

## 1. Repo and build

- Ensure the branch you want to deploy (e.g. `main` or a dedicated preview branch) is **pushed to GitHub**.
- From the **website** directory, confirm the build passes:
  ```bash
  cd website
  npm install
  npm run build
  ```

---

## 2. Connect the repo to Vercel

1. Log in at [vercel.com](https://vercel.com) and create or select a team.
2. **Add New Project** → **Import** your GitHub repository.
3. **Root Directory**: If your Git repo root is **above** the `website` folder (e.g. the repo is `QSL` and the Next.js app lives in `website/`), set **Root Directory** to `website`. Leave blank if the repo root is already the Next.js app.
4. Leave build command as `next build` and output as default. Add env vars only if your app needs them (this site does not require any for the comment pipeline).
5. Deploy. Vercel will build and deploy; every push to the connected branch (and PRs) will get new deployments.

---

## 3. Enable Comments on preview deployments

Vercel Comments let reviewers place comments in-context on the preview URL (highlight-by-click and comment). Enable them for Preview:

1. **Team**: **Settings** → **General** → **Vercel Toolbar** → turn **On** for **Preview** (or allow project override).
2. **Project**: Open your project → **Settings** → **General** → **Vercel Toolbar** → set to **On** for **Preview** (or **Default** to follow team).

Comments are often on by default for new projects; confirm they’re on for the project you use for temp deployments. Only logged-in Vercel users (typically team members) can add comments.

---

## 4. How to use: highlight and comment

1. Open a **preview deployment URL** (e.g. from a PR or from the Vercel project dashboard).
2. Use the **Vercel Toolbar** on the page:
   - Press **`c`** or use the toolbar to enter comment mode.
   - **Click anywhere on the page** to attach a comment to that spot (in-context “highlight”).
   - Add your comment text; you can attach screenshots and reply in threads.
3. Comments are stored by Vercel and linked to the deployment. PRs will show an “Add your feedback” link and track comment counts.

---

## 5. GitHub Issues: convert comments to issues

1. **Install the integration**: In Vercel, go to **Integrations** (or [Vercel → GitHub integration](https://vercel.com/integrations/github) / [GitHub Issues](https://vercel.com/integrations/gh-issues)). Add the **GitHub** (or **GitHub Issues**) integration and scope it to your team and this project.
2. **Convert a thread**: On any comment thread on a preview deployment, use the **Convert to Issue** action (issue-tracker icon on the thread). Choose the GitHub repo and issue title. The created issue will include the full thread, any images, and a link back to the comment thread on the preview.
3. No app env vars are required; the integration uses Vercel’s connection to GitHub.

Docs: [Adding comments to your issue tracker](https://vercel.com/docs/workflow-collaboration/comments/integrations#adding-comments-to-your-issue-tracker).

---

## 6. Verify end-to-end

1. Open a preview deployment URL and press **`c`** (or use the toolbar) to enter comment mode.
2. Click on the page to place a comment, add text (and optionally a screenshot), and submit.
3. On that comment thread, click **Convert to Issue**, choose your repo and a title, and create the issue.
4. Open the new issue in GitHub and confirm it contains the thread, images, and the link back to the preview comment thread.

---

## Summary

| Step | Action |
|------|--------|
| Repo | Push your branch to GitHub |
| Vercel | Import repo; set **Root Directory** to `website` if repo root is above it |
| Comments | Enable **Vercel Toolbar** for **Preview** (team and/or project settings) |
| Highlight + comment | Open preview URL → press `c` → click on page → add comment |
| GitHub issues | Install GitHub/GitHub Issues integration; use **Convert to Issue** on threads |
| Verify | Place test comment → convert to issue → check issue in GitHub |

No custom code, env vars in the app, or feedback form—just Vercel Comments and the GitHub integration.
