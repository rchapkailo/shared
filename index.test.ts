import { describe, expect, it } from "bun:test";

import { getRepoInfo } from "./index";

describe("getRepoInfo", () => {
  it("returns repo info for shared", () => {
    const info = getRepoInfo();
    expect(info.name).toBe("shared");
    expect(info.deps).toEqual([]);
  });
});