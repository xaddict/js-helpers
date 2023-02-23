import { FisherYatesShuffle } from './FisherYatesShuffle.js';

export default function uuid() {
  // eslint-disable-next-line no-undef
  if (typeof globalThis.crypto?.randomUUID === 'function') {
    console.debug('Browser supports Crypto API');
    // eslint-disable-next-line no-undef
    return globalThis.crypto.randomUUID();
    // eslint-disable-next-line no-undef
  } else if (URL.createObjectURL) {
    console.debug('Browser supports URL.createObjectURL');
    // fallback for older browsers
    const blob = new Blob();
    const temp_url = URL.createObjectURL(blob);
    const uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
    const lastIndexURL = uuid.lastIndexOf('/'); // for the browser, where URLs have slashes
    const lastIndexNode = uuid.lastIndexOf(':'); // for Node, where URLs have colons
    return uuid.substring(Math.max(lastIndexURL, lastIndexNode) + 1);
  } else {
    console.debug(
      "Platform doesn't support Crypto API, nor URL.createObjectURL. Naive fallback"
    );
    return FisherYatesShuffle(
      Array.from({ length: 999_999 }, (v, k) => k.toString(36))
    ).pop();
  }
}
