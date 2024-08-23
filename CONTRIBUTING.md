# CONTRIBUTING.md

## Welcome to 'GDG Guayaquil' 🌌

We're thrilled that you're interested in contributing to our project! This document will guide you through the steps required to contribute your valuable work to 'GDG Guayaquil', a project developed with Astro. We want to make this process simple and transparent, so here's a step-by-step guide.

### Getting started 🚀

1. **Get familiar with Astro JS**: If you haven't already, make sure you understand how Astro JS works. You can find a lot of useful information in [the official Astro documentation](https://docs.astro.build).

2. **Set up your development environment**: We recommend using `pnpm` as your package manager for its efficiency and speed. If you don't have `pnpm` installed, you can do so by running `npm install -g pnpm`.

### How to contribute 🛠

#### 1. Set up your environment

- **Fork the repository**: Fork the project to your GitHub account to have your own copy. To do this, click the "Fork" button at the top right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.

- **Clone your fork**: After forking, clone the repository to your local machine. To do so, copy the URL of your fork by clicking the green "Code" button and then run `git clone <fork URL>` in your terminal.

- **Add the original repository as a remote**: To keep your fork up to date with changes from the original repository, add the original repository as a remote. You can do this by running `git remote add upstream <original repository URL>`.

- **Make sure you're using the correct Node version**: To do this, use `nvm use` or `nvm use <version>`, if you don't use `nvm`, make sure to download the version listed in `.node-version` or `.nvmrc`.

- **Install dependencies**: Navigate to the cloned project directory and run `pnpm install` to install all necessary dependencies.

#### 2. Work on your changes

- **Sync the fork**: You can do this by going to `github.com/your-user/landing-gdggye` and clicking on `Sync fork`. You can also do this from the terminal `gh repo sync -b main` or `git switch main && git fetch upstream && git merge upstream/main`. Learn more in the [official Github documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)
- **Create a new branch**: Before you start working on your changes, create a new branch using `git switch -c your-branch-name`.
- **Develop your changes**: Deploy your changes or improvements to your local branch. Make sure to follow the project's coding practices and standards.
- **Test your changes**: Run `pnpm run dev` to start the Astro development server and review your changes in the browser.

#### 3. Submit your changes

- **Commit your changes**: Once you're happy with your changes, commit them with a clear, descriptive message.
- **Push your fork**: Push your branch with the changes to your fork on GitHub using `git push origin your-branch-name`.
- **Create a Pull Request (PR)**: On GitHub, go to your 'GDG Guayaquil' fork and click "Pull request" to start one. Make sure to clearly describe what changes you've made and why they're necessary or useful for the project.

### Best practices 🌟

- **Review open issues** before opening a PR, if you think you can fix it and there's no other PR already open, use `#issue-number` in your commit so it's added to the issue. It doesn't hurt to leave a comment so everyone knows which PR is being used for the issue.
- **Review open PRs** to make sure you're not working on something that's already in progress. You can always help out on open PRs by providing changes, comments, revisions, etc.
- **Keep your commits clean and descriptive**.
- **Follow the project's coding conventions**.
- **Update your branch frequently** to keep it up to date with the main branch of the project.
- **Participate in discussions** of your PR if there are comments or suggestions.
- **Use of global objects and types** like `new Date` -> `new window.Date`, `NodeListOf` -> `globalThis.NodeListOf`, `NodeJS` -> `globalThis.NodeJS`. If you don't know what to use, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) or to the [Astro](https://docs.astro.build/en/guides/typescript/#extending-window-and-globalthis) framework documentation

### Need help? 🆘

If you have any questions or need help, feel free to open an "issue" in the repository. Our team and community will be happy to help you.

Thank you for contributing to 'GDG Guayaquil'! Together we are building something amazing. 🚀
