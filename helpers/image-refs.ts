export type ImageSpec = {
  src: string | Blob;
  mimeType: string;
  srcType?: 'url' | 'dataURI' | 'blob';
};

export const imageRefs: Record<string, ImageSpec> = {
  smartblockLogo: {
    src: 'https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-logo.svg',
    srcType: 'url',
    mimeType: 'image/svg+xml'
  },
  smartblockIcon: {
    src: 'https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-icon.svg',
    srcType: 'url',
    mimeType: 'image/svg+xml'
  }
}
