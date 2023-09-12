import { getFakePolicyId } from "./__utils__/getFakePolicyId";

import {
  convertCip68AssetToMetadata,
  convertCip68MetadataToAsset,
  isCip68Asset,
  isCip68Metadata,
} from "../cip68";
import { CIP_68_ASSET_PREFIX, CIP_68_METADATA_PREFIX } from "../cip68";

describe("isCip68Asset", () => {
  it("should return true for assetName starting with CIP_68_ASSET_PREFIX", () => {
    const assetName = `${CIP_68_ASSET_PREFIX}exampleAsset`;
    const result = isCip68Asset(assetName);
    expect(result).toBe(true);
  });

  it("should return false for assetName not starting with CIP_68_ASSET_PREFIX", () => {
    const assetName = "exampleAsset";
    const result = isCip68Asset(assetName);
    expect(result).toBe(false);
  });
});

describe("isCip68Metadata", () => {
  it("should return true for assetName starting with CIP_68_METADATA_PREFIX", () => {
    const assetName = `${CIP_68_METADATA_PREFIX}exampleAsset`;
    const result = isCip68Metadata(assetName);
    expect(result).toBe(true);
  });

  it("should return false for assetName not starting with CIP_68_METADATA_PREFIX", () => {
    const assetName = "exampleAsset";
    const result = isCip68Metadata(assetName);
    expect(result).toBe(false);
  });
});

describe("convertCip68AssetToMetadata", () => {
  it("should return the asset converted to metadata", () => {
    const asset = `${getFakePolicyId()}${CIP_68_ASSET_PREFIX}exampleAsset`;
    const result = convertCip68AssetToMetadata(asset);
    expect(result).toBe(
      `${getFakePolicyId()}${CIP_68_METADATA_PREFIX}exampleAsset`
    );
  });

  it("should not affect policy id", () => {
    const fakePolicyIdWithSamePattern = `${getFakePolicyId().slice(
      8
    )}${CIP_68_ASSET_PREFIX}`;

    const asset = `${fakePolicyIdWithSamePattern}${CIP_68_ASSET_PREFIX}exampleAsset`;
    const result = convertCip68AssetToMetadata(asset);

    expect(result).toBe(
      `${fakePolicyIdWithSamePattern}${CIP_68_METADATA_PREFIX}exampleAsset`
    );
  });
});

describe("convertCip68MetadataToAsset", () => {
  it("should return the metadata converted to asset", () => {
    const asset = `${getFakePolicyId()}${CIP_68_METADATA_PREFIX}exampleAsset`;
    const result = convertCip68MetadataToAsset(asset);
    expect(result).toBe(
      `${getFakePolicyId()}${CIP_68_ASSET_PREFIX}exampleAsset`
    );
  });

  it("should not affect policy id", () => {
    const fakePolicyIdWithSamePattern = `${getFakePolicyId().slice(
      8
    )}${CIP_68_METADATA_PREFIX}`;

    const asset = `${fakePolicyIdWithSamePattern}${CIP_68_METADATA_PREFIX}exampleAsset`;
    const result = convertCip68MetadataToAsset(asset);

    expect(result).toBe(
      `${fakePolicyIdWithSamePattern}${CIP_68_ASSET_PREFIX}exampleAsset`
    );
  });
});
