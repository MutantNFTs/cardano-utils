import { toLovelace } from "../toLovelace";

describe("toLovelace", () => {
  it("correctly converts Ada values into Lovelace", () => {
    expect(toLovelace(1.5)).toBe(1500000n);
    expect(toLovelace(34.7)).toBe(34700000n);
    expect(toLovelace(5)).toBe(5000000n);
    expect(toLovelace(0)).toBe(0n);
  });

  it("handles large values correctly", () => {
    expect(toLovelace(1000000)).toBe(1000000000000n);
  });
});
