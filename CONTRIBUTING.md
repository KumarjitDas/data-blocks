# Contributing to DATA-BLOCKS

Thanks for your interest in contributing! Bug reports, fixes, docs improvements,
and new features are all welcome.

## Before You Start

### License and CLA

DATA-BLOCKS is **source-available** under the PolyForm Noncommercial License
1.0.0, with commercial licenses offered separately (see [LICENSE](LICENSE.md)).

To make that possible, all contributors must sign the
[Contributor License Agreement](CLA.md). You keep the copyright to your work.
The CLA gives the maintainer the right to include your contribution in both the
public and commercial versions of the project.

When you open your first pull request, a bot will ask you to sign the CLA. It
takes about a minute, and pull requests can't be merged until it's signed.

### Discuss larger changes first

For anything beyond a small fix, please [open an issue](../../issues/new) first
to discuss the idea. That way no one spends time on work that might not be
merged.

## Reporting Bugs

Search [existing issues](../../issues) first. If nobody has reported it yet,
open a new issue and include:

- A clear description of the problem
- Steps to reproduce it
- What you expected to happen, and what actually happened
- Your environment (OS, Node.js version, browser, if relevant)
- Screenshots or logs, if they help

**Security issues:** please don't open a public issue. Email
[kumarjitdas1999@gmail.com](mailto:kumarjitdas1999+issue@gmail.com) instead.

## Suggesting Features

Open an issue describing:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you've considered

## Development Setup

**Requirements:** Node.js [20+], pnpm [9+]

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/<your-username>/data-blocks.git
cd data-blocks
pnpm install
cp .env.example .env   # then fill in the values
pnpm dev
```

Useful scripts:

| Command          | What it does              |
| ---------------- | ------------------------- |
| `pnpm dev`       | Start the dev server      |
| `pnpm build`     | Production build          |
| `pnpm test`      | Run tests                 |
| `pnpm lint`      | Lint the code             |
| `pnpm format`    | Format with Prettier      |
| `pnpm typecheck` | Run the TypeScript checks |

## Making Changes

1. Create a branch from `main`:

```bash
   git checkout -b feat/short-description
```

Branch prefixes: `feat/`, `fix/`, `docs/`, `refactor/`, `chore/`

2. Make your changes, keeping each pull request focused on one thing.

3. Add or update tests for what you changed.

4. Make sure everything passes:

```bash
   pnpm lint && pnpm typecheck && pnpm test
```

### Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org):

```
feat: add CSV export to chart panel
fix: correct axis scaling for negative values
docs: update setup instructions
```

### Code style

- TypeScript strict mode. Avoid `any` unless there's a good reason.
- ESLint and Prettier handle formatting, so run `pnpm format` before committing.
- Prefer clear names over comments, and comment the _why_, not the _what_.

## Submitting a Pull Request

1. Push your branch to your fork and open a pull request against `main`.
2. Fill in the PR description: what changed, why, and how you tested it.
   Link related issues (for example, `Closes #42`).
3. Sign the CLA if prompted.
4. Respond to review feedback. Pushing more commits to the same branch updates
   the PR.

I'll try to review pull requests within [a week]. If yours has been waiting
longer, feel free to leave a polite comment on it.

## Code of Conduct

Be respectful and constructive. Harassment or personal attacks of any kind
won't be tolerated. [Optional: link a CODE_OF_CONDUCT.md, e.g. the Contributor
Covenant.]

## Questions?

Open a [discussion](../../discussions) or an issue, or email
[kumarjitdas1999@gmail.com](mailto:kumarjitdas1999+issue@gmail.com).
