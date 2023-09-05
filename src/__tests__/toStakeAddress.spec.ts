import { toStakeAddress } from "../toStakeAddress";

describe("toStakeAddress", () => {
  it("keeps the same addr when there is no stake key", () => {
    const result = toStakeAddress(
      "addr1w8cvzcnclvkua25vx26j72pddatuedsxspm62mr63urs0fctuuzfv"
    );

    expect(result).toBe(
      "addr1w8cvzcnclvkua25vx26j72pddatuedsxspm62mr63urs0fctuuzfv"
    );
  });

  it("converts a mainnet payment address into a stake address", () => {
    const result = toStakeAddress(
      "addr1qxsgae4x0z3q0hjjqcwya7vzp9f9ex52lrly0wadmfgvhpfyzttqmp0evfcrwxkda77m5lg8c9ta2aafdf83jxyvhw3sgp9v30"
    );

    expect(result).toBe(
      "stake1uyjp94sdshukyuphrtx7l0d605ruz474w75k5ncerzxthgc4mghs5"
    );
  });

  it("converts a hex address into a stake address", () => {
    const result = toStakeAddress(
      "01c59dc72ab0bd904dc9a430bd0b6d9d3b3c2d32dfa3dcf5affd309002fa02bb733c2b7f9684260bc4b53fb8655cb4b31bfd879a127cf684b2"
    );

    expect(result).toBe(
      "stake1u8aq9wmn8s4hl95yyc9ufdflhpj4ed9nr07c0xsj0nmgfvs09jmpq"
    );
  });
});
