import { toPaymentAddress } from "../toPaymentAddress";

describe("toPaymentAddress", () => {
  test("correctly converts hex addresses into payment addresses", () => {
    expect(
      toPaymentAddress(
        "01e922e8166852073d6c1c9be0736530404c9c26d9ba1773e11d32d11c0f7b2c7f8924528d797a8f86d8210d6276e09f47b82ecd53a24900e7"
      )
    ).toBe(
      "addr1q85j96qkdpfqw0tvrjd7qum9xpqye8pxmxapwulpr5edz8q00vk8lzfy22xhj750smvzzrtzwmsf73ac9mx48gjfqrnspq6sah"
    );
  });
});
