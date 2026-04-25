export interface RepoInfo {
	name: string;
	deps: string[];
}

export declare const REPO_NAME: string;
export declare function getRepoInfo(): RepoInfo;
export declare function getRepoName(): string;
