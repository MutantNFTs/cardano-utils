import { bech32 } from "bech32";

const toPaymentAddress = (hexAddress: string) => {
  const buffer = Buffer.from(hexAddress, "hex");
  const bechWords = bech32.toWords(buffer);

  const value = bech32.encode("addr", bechWords, 120);

  return value;
};

export { toPaymentAddress };
