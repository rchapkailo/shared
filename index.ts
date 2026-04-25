export const REPO_NAME = "shared";

export interface RepoInfo {
	name: string;
	deps: string[];
}

export function getRepoInfo(): RepoInfo {
	return { name: REPO_NAME, deps: [] };
}

export function getRepoName(): string {
	return REPO_NAME;
}

const info = getRepoInfo();
console.log(`Repo: ${info.name}, deps: ${info.deps.join(", ") || "none"}`);