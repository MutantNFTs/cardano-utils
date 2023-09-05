import { bech32 } from "bech32";

import { hexToBytes } from "./hexToBytes";
import { toHexAddress } from "./toHexAddress";

const PAYMENT_WITHOUT_STAKING_KEY_LENGTH = 58;

export const toStakeAddress = (paymentOrHexAddress: string) => {
  if (paymentOrHexAddress.length <= PAYMENT_WITHOUT_STAKING_KEY_LENGTH) {
    return paymentOrHexAddress;
  }

  const hexAddress = paymentOrHexAddress.startsWith("addr") ? toHexAddress(paymentOrHexAddress) : paymentOrHexAddress;
  const stakeHexAddress = hexAddress.substring(58);
  const stakeHexBytes = hexToBytes("e1" + stakeHexAddress);
  const bech32Words = bech32.toWords(stakeHexBytes);

  return bech32.encode("stake", bech32Words, 120);
};
