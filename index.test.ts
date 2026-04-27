import { describe, expect, it } from "bun:test";

import { getRepoMetadata } from "./index";

describe("getRepoMetadata", () => {
  it("returns repo info for shared", () => {
    const info = getRepoMetadata();
    expect(info.name).toBe("shared");
    expect(info.deps).toEqual([]);
  });
});
