import { describe, expect, it } from "bun:test";

import { getRepoName } from "./index";

describe("getRepoName", () => {
  it("returns shared", () => {
    expect(getRepoName()).toBe("shared");
  });
});