import { describe, expect, it } from "vitest";
import { formatBytes, toTitle } from "@/lib/utils";
describe("formatting utilities", () => { it("formats display bytes", () => expect(formatBytes(1_048_576)).toBe("1.0 MB")); it("turns slugs into titles", () => expect(toTitle("amoled-wallpapers")).toBe("Amoled Wallpapers")); });
