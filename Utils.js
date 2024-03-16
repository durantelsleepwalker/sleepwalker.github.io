
export class UtilsWrapper {

    constructor() { }
    set() { }
    clone() { return new UtilsWrapper(); }

    // UTF-8 encode a string to bytes
    utf8Encode(str) {
        const encoder = new TextEncoder();
        const encoded = encoder.encode(str);
        return encoded;
    }
    // Convert bytes back to UTF-8 encoded string
    utf8Decode(bytes) {
        const decoder = new TextDecoder();
        const decoded = decoder.decode(bytes);
        return decoded;
    }

    highestBit(number) {
        const tmp = BigInt(number);

        for (let i = 0; i < 64; i++) {
            if ((tmp >> BigInt(63 - i) & BigInt(0x01)) === BigInt(1)) {
                return 63 - i;
            }
        }
        return 0;
    }

    numberToBits(number) {
        const length = this.highestBit(number) + 1;
        const stencil = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            stencil[i] = (number >> i) & 0x01;
        }
        return stencil;
    }

    invertWithNumber(bytes, number) {
        const stencil = this.numberToBits(number);
        const invertedBytes = new Uint8Array(bytes.length);

        for (let i = 0; i < bytes.length; i++) {
            invertedBytes[i] = 0;
            for (let j = 0; j < 8; j++) {
                const temp = bytes[i];
                invertedBytes[i] |= (stencil[(i * 8 + j) % stencil.length]) ? (~(temp >> j) & 0x01) << j : ((temp >> j) & 0x01) << j;
            }
        }

        return invertedBytes;
    }

}