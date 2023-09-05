import { toHexAddress } from "./toHexAddress";

export const toPubKeyHash = (paymentAddress: string) => {
  const address = toHexAddress(paymentAddress);

  return address.substring(2, 58);
};
