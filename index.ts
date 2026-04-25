export const REPO_NAME = "shared";

export function getRepoName(): string {
	return REPO_NAME;
}

console.log(`Repo: ${getRepoName()}`);