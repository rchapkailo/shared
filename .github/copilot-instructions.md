# Copilot Instructions

## Pull Request Workflow

When the user asks to create a PR, follow this exact sequence unless explicitly told otherwise:

1. Synchronize with latest remote `main` before any code changes (strict mode).
   - Run `git status --porcelain` first.
   - If output is not empty, stop and ask whether to stash, commit, or abort. Do not continue automatically.
   - Run `git fetch origin --prune`.
   - Run `git switch main` (or `git checkout main` if switch is unavailable).
   - Ensure local `main` tracks `origin/main`; if not, set upstream before pulling.
   - Run `git pull --rebase origin main`.
   - If rebase conflicts occur, stop and ask before resolving.
2. Create a new branch from updated main for the task.
   - Branch name format: `task/<short-slug>`
3. Implement only requested changes.
4. Run relevant checks/tests for touched code.
5. Commit with a semantic Conventional Commit message.
   - Prefer: `feat: ...`, `fix: ...`, `chore: ...`, `refactor: ...`, `test: ...`, `docs: ...`
   - Keep one clean commit per PR by default. Before opening or updating the PR, squash or amend incremental commits into that single semantic commit unless the user explicitly asks for multiple commits.
6. Push branch and open a PR with clear title/body.
   - PR description must include sections: `Summary`, `Validation`, and `Execution Report`.
   - In `Execution Report`, fill values for `Agent name` and `LLM model` (do not leave placeholders).

## Execution Reporting

- Whenever the assistant performs actions, include a short report in the response with:
   - `Agent name`: `<fill-agent-name>`
   - `LLM model`: `<fill-model-version>`
   - `Actions performed`: concise summary of files/commands changed
- Mirror the same `Execution Report` block in the PR description whenever opening or updating a PR.

## Safety Rules

- Never commit directly to `main`.
- Never skip updating `main` first.
- Keep commits scoped to the requested task.
- Keep PR history clean: use amend/squash for follow-up fixes on the same PR unless the user requests separate commits.
- If blockers appear (conflicts, missing permissions, failing required checks), report clearly and propose the next action.
