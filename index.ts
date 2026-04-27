import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface RepoInfo {
	name: string;
	deps: string[];
}

interface PackageJsonShape {
	name?: string;
	dependencies?: Record<string, string>;
}

function normalizeName(packageName: string): string {
	if (!packageName.startsWith("@")) {
		return packageName;
	}

	const [, scopedName] = packageName.split("/", 2);
	return scopedName || packageName;
}

export function getRepoMetadata(): RepoInfo {
	let packageJsonPath = join(process.cwd(), "package.json");
	const raw = readFileSync(packageJsonPath, "utf8");
	const pkg = JSON.parse(raw) as PackageJsonShape;

	if (!pkg.name) {
		throw new Error(`package.json is missing 'name' at ${packageJsonPath}`);
	}

	return {
		name: normalizeName(pkg.name),
		deps: Object.keys(pkg.dependencies || {})
	};
}
