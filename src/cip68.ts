import { getAssetDetails } from "./getAssetDetails";

export const CIP_68_ASSET_PREFIX = "000de140";
export const CIP_68_METADATA_PREFIX = "000643b0";

export const isCip68Asset = (assetName: string) => {
  if (assetName.startsWith(CIP_68_ASSET_PREFIX)) {
    return true;
  }

  return false;
};

export const isCip68Metadata = (assetName: string) => {
  if (assetName.startsWith(CIP_68_METADATA_PREFIX)) {
    return true;
  }

  return false;
};

export const convertCip68AssetToMetadata = (asset: string) => {
  const details = getAssetDetails(asset);

  return `${details.assetPolicy}${details.assetName.replace(
    CIP_68_ASSET_PREFIX,
    CIP_68_METADATA_PREFIX
  )}`;
};

export const convertCip68MetadataToAsset = (asset: string) => {
  const details = getAssetDetails(asset);

  return `${details.assetPolicy}${details.assetName.replace(
    CIP_68_METADATA_PREFIX,
    CIP_68_ASSET_PREFIX
  )}`;
};
