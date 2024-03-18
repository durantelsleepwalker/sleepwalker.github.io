
export class EasyCrypt {

    constructor() { }
    set() { }
    clone() { return new EasyCrypt(); }

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
        const tmp = number;

        for (let i = 0; i < 64; i++) {
            if ((tmp >> BigInt(63 - i) & BigInt(0x01)) === BigInt(1)) {
                return 63 - i;
            }
        }
        return 0;
    }

    numberToBits(number) {
        const data = this.bigUintArrayToUint8Array(number);
        const length = this.highestBit(number) + 1;
        const stencil = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            stencil[i] = (data[i / 8] >> (i%8)) & 0x01;
        }
        return stencil;
    }
    enigmaFunction(number, mode = 'A') {
        switch (mode) {
            case 'A':
                switch (number) {
                    case 0:
                        return 3;
                    case 1:
                        return 2;
                    case 2:
                        return 1;
                    case 3:
                        return 5;
                    case 4:
                        return 6;
                    case 5:
                        return 4;
                    case 6:
                        return 0;
                    case 7:
                        return 7;
                }
            case 'B':
                switch (number) {
                    case 0:
                        return 1;
                    case 1:
                        return 4;
                    case 2:
                        return 5;
                    case 3:
                        return 6;
                    case 4:
                        return 3;
                    case 5:
                        return 7;
                    case 6:
                        return 0;
                    case 7:
                        return 2;
                }
            case 'C':
                switch (number) {
                    case 0:
                        return 0;
                    case 1:
                        return 7;
                    case 2:
                        return 1;
                    case 3:
                        return 6;
                    case 4:
                        return 2;
                    case 5:
                        return 5;
                    case 6:
                        return 3;
                    case 7:
                        return 4;
                }
            case 'D':
                switch (number) {
                    case 0:
                        return 3;
                    case 1:
                        return 6;
                    case 2:
                        return 5;
                    case 3:
                        return 4;
                    case 4:
                        return 1;
                    case 5:
                        return 7;
                    case 6:
                        return 0;
                    case 7:
                        return 2;
                }
            case 'E':
                switch (number) {
                    case 0:
                        return 7;
                    case 1:
                        return 5;
                    case 2:
                        return 2;
                    case 3:
                        return 3;
                    case 4:
                        return 0;
                    case 5:
                        return 6;
                    case 6:
                        return 4;
                    case 7:
                        return 1;
                }
            case 'F':
                switch (number) {
                    case 0:
                        return 2;
                    case 1:
                        return 7;
                    case 2:
                        return 6;
                    case 3:
                        return 5;
                    case 4:
                        return 1;
                    case 5:
                        return 3;
                    case 6:
                        return 0;
                    case 7:
                        return 4;
                }
            case 'G':
                switch (number) {
                    case 0:
                        return 4;
                    case 1:
                        return 2;
                    case 2:
                        return 3;
                    case 3:
                        return 6;
                    case 4:
                        return 0;
                    case 5:
                        return 1;
                    case 6:
                        return 7;
                    case 7:
                        return 5;
                }
            case 'H':
                switch (number) {
                    case 0:
                        return 2;
                    case 1:
                        return 3;
                    case 2:
                        return 7;
                    case 3:
                        return 6;
                    case 4:
                        return 0;
                    case 5:
                        return 1;
                    case 6:
                        return 4;
                    case 7:
                        return 5;
                }
            case 'I':
                switch (number) {
                    case 0:
                        return 4;
                    case 1:
                        return 3;
                    case 2:
                        return 2;
                    case 3:
                        return 6;
                    case 4:
                        return 7;
                    case 5:
                        return 1;
                    case 6:
                        return 0;
                    case 7:
                        return 5;
                }
            case 'J':
                switch (number) {
                    case 0:
                        return 2;
                    case 1:
                        return 4;
                    case 2:
                        return 1;
                    case 3:
                        return 7;
                    case 4:
                        return 0;
                    case 5:
                        return 5;
                    case 6:
                        return 6;
                    case 7:
                        return 3;
                }
            case 'K':
                switch (number) {
                    case 0:
                        return 2;
                    case 1:
                        return 6;
                    case 2:
                        return 1;
                    case 3:
                        return 3;
                    case 4:
                        return 0;
                    case 5:
                        return 5;
                    case 6:
                        return 4;
                    case 7:
                        return 7;
                }
            case 'L':
                switch (number) {
                    case 0:
                        return 1;
                    case 1:
                        return 6;
                    case 2:
                        return 7;
                    case 3:
                        return 4;
                    case 4:
                        return 5;
                    case 5:
                        return 2;
                    case 6:
                        return 0;
                    case 7:
                        return 3;
                }
            case 'M':
                switch (number) {
                    case 0:
                        return 3;
                    case 1:
                        return 0;
                    case 2:
                        return 7;
                    case 3:
                        return 2;
                    case 4:
                        return 1;
                    case 5:
                        return 6;
                    case 6:
                        return 5;
                    case 7:
                        return 4;
                }
            case 'N':
                switch (number) {
                    case 0:
                        return 6;
                    case 1:
                        return 7;
                    case 2:
                        return 3;
                    case 3:
                        return 0;
                    case 4:
                        return 5;
                    case 5:
                        return 2;
                    case 6:
                        return 4;
                    case 7:
                        return 1;
                }
            case 'O':
                switch (number) {
                    case 0:
                        return 0;
                    case 1:
                        return 7;
                    case 2:
                        return 6;
                    case 3:
                        return 3;
                    case 4:
                        return 4;
                    case 5:
                        return 1;
                    case 6:
                        return 5;
                    case 7:
                        return 2;
                }
            case 'P':
                switch (number) {
                    case 0:
                        return 0;
                    case 1:
                        return 1;
                    case 2:
                        return 3;
                    case 3:
                        return 4;
                    case 4:
                        return 6;
                    case 5:
                        return 5;
                    case 6:
                        return 7;
                    case 7:
                        return 2;
                }
            case 'Q':
                switch (number) {
                    case 0:
                        return 1;
                    case 1:
                        return 6;
                    case 2:
                        return 7;
                    case 3:
                        return 4;
                    case 4:
                        return 2;
                    case 5:
                        return 3;
                    case 6:
                        return 0;
                    case 7:
                        return 5;
                }
            case 'R':
                switch (number) {
                    case 0:
                        return 0;
                    case 1:
                        return 5;
                    case 2:
                        return 2;
                    case 3:
                        return 4;
                    case 4:
                        return 7;
                    case 5:
                        return 3;
                    case 6:
                        return 6;
                    case 7:
                        return 1;
                }
            case 'S':
                switch (number) {
                    case 0:
                        return 1;
                    case 1:
                        return 3;
                    case 2:
                        return 2;
                    case 3:
                        return 4;
                    case 4:
                        return 5;
                    case 5:
                        return 0;
                    case 6:
                        return 7;
                    case 7:
                        return 6;
                }
            case 'T':
                switch (number) {
                    case 0:
                        return 2;
                    case 1:
                        return 6;
                    case 2:
                        return 7;
                    case 3:
                        return 3;
                    case 4:
                        return 0;
                    case 5:
                        return 1;
                    case 6:
                        return 4;
                    case 7:
                        return 5;
                }
            case 'U':
                switch (number) {
                    case 0:
                        return 4;
                    case 1:
                        return 1;
                    case 2:
                        return 7;
                    case 3:
                        return 6;
                    case 4:
                        return 3;
                    case 5:
                        return 2;
                    case 6:
                        return 5;
                    case 7:
                        return 0;
                }
            case 'V':
                switch (number) {
                    case 0:
                        return 2;
                    case 1:
                        return 4;
                    case 2:
                        return 3;
                    case 3:
                        return 7;
                    case 4:
                        return 6;
                    case 5:
                        return 0;
                    case 6:
                        return 5;
                    case 7:
                        return 1;
                }
            case 'W':
                switch (number) {
                    case 0:
                        return 3;
                    case 1:
                        return 0;
                    case 2:
                        return 2;
                    case 3:
                        return 7;
                    case 4:
                        return 4;
                    case 5:
                        return 6;
                    case 6:
                        return 5;
                    case 7:
                        return 1;
                }
            case 'X':
                switch (number) {
                    case 0:
                        return 3;
                    case 1:
                        return 5;
                    case 2:
                        return 4;
                    case 3:
                        return 0;
                    case 4:
                        return 1;
                    case 5:
                        return 2;
                    case 6:
                        return 7;
                    case 7:
                        return 6;
                }
            case 'Y':
                switch (number) {
                    case 0:
                        return 7;
                    case 1:
                        return 2;
                    case 2:
                        return 1;
                    case 3:
                        return 4;
                    case 4:
                        return 0;
                    case 5:
                        return 5;
                    case 6:
                        return 3;
                    case 7:
                        return 6;
                }
            case 'Z':
                switch (number) {
                    case 0:
                        return 5;
                    case 1:
                        return 2;
                    case 2:
                        return 6;
                    case 3:
                        return 0;
                    case 4:
                        return 3;
                    case 5:
                        return 7;
                    case 6:
                        return 4;
                    case 7:
                        return 1;
                }
            case 'a':
                switch (number) {
                    case 3:
                        return 0;
                    case 2:
                        return 1;
                    case 1:
                        return 2;
                    case 5:
                        return 3;
                    case 6:
                        return 4;
                    case 4:
                        return 5;
                    case 0:
                        return 6;
                    case 7:
                        return 7;
                }
            case 'b':
                switch (number) {
                    case 1:
                        return 0;
                    case 4:
                        return 1;
                    case 5:
                        return 2;
                    case 6:
                        return 3;
                    case 3:
                        return 4;
                    case 7:
                        return 5;
                    case 0:
                        return 6;
                    case 2:
                        return 7;
                }
            case 'c':
                switch (number) {
                    case 0:
                        return 0;
                    case 7:
                        return 1;
                    case 1:
                        return 2;
                    case 6:
                        return 3;
                    case 2:
                        return 4;
                    case 5:
                        return 5;
                    case 3:
                        return 6;
                    case 4:
                        return 7;
                }
            case 'd':
                switch (number) {
                    case 3:
                        return 0;
                    case 6:
                        return 1;
                    case 5:
                        return 2;
                    case 4:
                        return 3;
                    case 1:
                        return 4;
                    case 7:
                        return 5;
                    case 0:
                        return 6;
                    case 2:
                        return 7;
                }
            case 'e':
                switch (number) {
                    case 7:
                        return 0;
                    case 5:
                        return 1;
                    case 2:
                        return 2;
                    case 3:
                        return 3;
                    case 0:
                        return 4;
                    case 6:
                        return 5;
                    case 4:
                        return 6;
                    case 1:
                        return 7;
                }
            case 'f':
                switch (number) {
                    case 2:
                        return 0;
                    case 7:
                        return 1;
                    case 6:
                        return 2;
                    case 5:
                        return 3;
                    case 1:
                        return 4;
                    case 3:
                        return 5;
                    case 0:
                        return 6;
                    case 4:
                        return 7;
                }
            case 'g':
                switch (number) {
                    case 4:
                        return 0;
                    case 2:
                        return 1;
                    case 3:
                        return 2;
                    case 6:
                        return 3;
                    case 0:
                        return 4;
                    case 1:
                        return 5;
                    case 7:
                        return 6;
                    case 5:
                        return 7;
                }
            case 'h':
                switch (number) {
                    case 2:
                        return 0;
                    case 3:
                        return 1;
                    case 7:
                        return 2;
                    case 6:
                        return 3;
                    case 0:
                        return 4;
                    case 1:
                        return 5;
                    case 4:
                        return 6;
                    case 5:
                        return 7;
                }
            case 'i':
                switch (number) {
                    case 4:
                        return 0;
                    case 3:
                        return 1;
                    case 2:
                        return 2;
                    case 6:
                        return 3;
                    case 7:
                        return 4;
                    case 1:
                        return 5;
                    case 0:
                        return 6;
                    case 5:
                        return 7;
                }
            case 'j':
                switch (number) {
                    case 2:
                        return 0;
                    case 4:
                        return 1;
                    case 1:
                        return 2;
                    case 7:
                        return 3;
                    case 0:
                        return 4;
                    case 5:
                        return 5;
                    case 6:
                        return 6;
                    case 3:
                        return 7;
                }
            case 'k':
                switch (number) {
                    case 2:
                        return 0;
                    case 6:
                        return 1;
                    case 1:
                        return 2;
                    case 3:
                        return 3;
                    case 0:
                        return 4;
                    case 5:
                        return 5;
                    case 4:
                        return 6;
                    case 7:
                        return 7;
                }
            case 'l':
                switch (number) {
                    case 1:
                        return 0;
                    case 6:
                        return 1;
                    case 7:
                        return 2;
                    case 4:
                        return 3;
                    case 5:
                        return 4;
                    case 2:
                        return 5;
                    case 0:
                        return 6;
                    case 3:
                        return 7;
                }
            case 'm':
                switch (number) {
                    case 3:
                        return 0;
                    case 0:
                        return 1;
                    case 7:
                        return 2;
                    case 2:
                        return 3;
                    case 1:
                        return 4;
                    case 6:
                        return 5;
                    case 5:
                        return 6;
                    case 4:
                        return 7;
                }
            case 'n':
                switch (number) {
                    case 6:
                        return 0;
                    case 7:
                        return 1;
                    case 3:
                        return 2;
                    case 0:
                        return 3;
                    case 5:
                        return 4;
                    case 2:
                        return 5;
                    case 4:
                        return 6;
                    case 1:
                        return 7;
                }
            case 'o':
                switch (number) {
                    case 0:
                        return 0;
                    case 7:
                        return 1;
                    case 6:
                        return 2;
                    case 3:
                        return 3;
                    case 4:
                        return 4;
                    case 1:
                        return 5;
                    case 5:
                        return 6;
                    case 2:
                        return 7;
                }
            case 'p':
                switch (number) {
                    case 0:
                        return 0;
                    case 1:
                        return 1;
                    case 3:
                        return 2;
                    case 4:
                        return 3;
                    case 6:
                        return 4;
                    case 5:
                        return 5;
                    case 7:
                        return 6;
                    case 2:
                        return 7;
                }
            case 'q':
                switch (number) {
                    case 1:
                        return 0;
                    case 6:
                        return 1;
                    case 7:
                        return 2;
                    case 4:
                        return 3;
                    case 2:
                        return 4;
                    case 3:
                        return 5;
                    case 0:
                        return 6;
                    case 5:
                        return 7;
                }
            case 'r':
                switch (number) {
                    case 0:
                        return 0;
                    case 5:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 3;
                    case 7:
                        return 4;
                    case 3:
                        return 5;
                    case 6:
                        return 6;
                    case 1:
                        return 7;
                }
            case 's':
                switch (number) {
                    case 1:
                        return 0;
                    case 3:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 3;
                    case 5:
                        return 4;
                    case 0:
                        return 5;
                    case 7:
                        return 6;
                    case 6:
                        return 7;
                }
            case 't':
                switch (number) {
                    case 2:
                        return 0;
                    case 6:
                        return 1;
                    case 7:
                        return 2;
                    case 3:
                        return 3;
                    case 0:
                        return 4;
                    case 1:
                        return 5;
                    case 4:
                        return 6;
                    case 5:
                        return 7;
                }
            case 'u':
                switch (number) {
                    case 4:
                        return 0;
                    case 1:
                        return 1;
                    case 7:
                        return 2;
                    case 6:
                        return 3;
                    case 3:
                        return 4;
                    case 2:
                        return 5;
                    case 5:
                        return 6;
                    case 0:
                        return 7;
                }
            case 'v':
                switch (number) {
                    case 2:
                        return 0;
                    case 4:
                        return 1;
                    case 3:
                        return 2;
                    case 7:
                        return 3;
                    case 6:
                        return 4;
                    case 0:
                        return 5;
                    case 5:
                        return 6;
                    case 1:
                        return 7;
                }
            case 'w':
                switch (number) {
                    case 3:
                        return 0;
                    case 0:
                        return 1;
                    case 2:
                        return 2;
                    case 7:
                        return 3;
                    case 4:
                        return 4;
                    case 6:
                        return 5;
                    case 5:
                        return 6;
                    case 1:
                        return 7;
                }
            case 'x':
                switch (number) {
                    case 3:
                        return 0;
                    case 5:
                        return 1;
                    case 4:
                        return 2;
                    case 0:
                        return 3;
                    case 1:
                        return 4;
                    case 2:
                        return 5;
                    case 7:
                        return 6;
                    case 6:
                        return 7;
                }
            case 'y':
                switch (number) {
                    case 7:
                        return 0;
                    case 2:
                        return 1;
                    case 1:
                        return 2;
                    case 4:
                        return 3;
                    case 0:
                        return 4;
                    case 5:
                        return 5;
                    case 3:
                        return 6;
                    case 6:
                        return 7;
                }
            case 'z':
                switch (number) {
                    case 5:
                        return 0;
                    case 2:
                        return 1;
                    case 6:
                        return 2;
                    case 0:
                        return 3;
                    case 3:
                        return 4;
                    case 7:
                        return 5;
                    case 4:
                        return 6;
                    case 1:
                        return 7;
                }
        }
    }

    isLowerCase(character) {
        return character === character.toLowerCase();
    }

    isUpperCase(character) {
        return character === character.toUpperCase();
    }

    encrypt(bytes, number, mode = 'A') {
        if (number === 0) return bytes;
        const stencil = this.numberToBits(number);
        const invertedBytes = new Uint8Array(bytes.length);

        console.log(mode);

        for (let i = 0; i < bytes.length; i++) {
            invertedBytes[i] = 0;
            for (let j = 0; j < 8; j++) {
                const temp = bytes[i];
                const shuffle = this.enigmaFunction(j, mode);
                invertedBytes[i] |= (stencil[(i * 8 + j) % stencil.length]) ? (~(temp >> j) & 0x01) << shuffle : ((temp >> j) & 0x01) << shuffle;
            }
        }

        return invertedBytes;
    }

    decrypt(bytes, number, mode = 'A') {
        if (number === 0) return bytes;
        const stencil = this.numberToBits(number);
        const invertedBytes = new Uint8Array(bytes.length);

        console.log(mode);
        for (let i = 0; i < bytes.length; i++) {
            invertedBytes[i] = 0;
            for (let j = 0; j < 8; j++) {
                const temp = bytes[i];
                const shuffle = this.enigmaFunction(j, mode);
                invertedBytes[i] |= (stencil[(i * 8 + j) % stencil.length]) ? (~(temp >> shuffle) & 0x01) << j : ((temp >> shuffle) & 0x01) << j;
            }
        }

        return invertedBytes;
    }

    arrayBufferToBigUintArray(arrayBuffer) {
        // Create a DataView from the Uint8Array
        const dataView = new DataView(arrayBuffer);

        // Determine the number of BigInt values in the Uint8Array
        const numBigInts = arrayBuffer.byteLength / 8; // Assuming 8 bytes per BigInt (64-bit platform)

        // Read the BigInt values from the DataView
        const bigIntArray = [];

        for (let i = 0; i < numBigInts; i++) {
            const bigIntValue = dataView.getBigUint64(i * 8);
            bigIntArray.push(bigIntValue);
        }

        return bigIntArray;
    }

    bigUintArrayToUint8Array(bigUintArray) {
        const byteLength = bigUintArray.length * 8; // Each element is 8 bytes (64 bits)
        const uint8Array = new Uint8Array(byteLength);
        const dataView = new DataView(uint8Array.buffer);

        for (let i = 0; i < bigUintArray.length; i++) {
            dataView.setBigUint64(i * 8, bigUintArray[i], true);
        }

        return uint8Array;
    }

    saveToFile(uint8Array) {
        // Create a Blob from the Uint8Array
        const blob = new Blob([uint8Array], { type: 'application/octet-stream' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a link element and set its attributes
        const link = document.createElement('a');
        link.href = url;
        link.download = 'key.txt'; // Specify the desired filename

        // Programmatically trigger a click event on the link element
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
    }


    validateFile(file) {
        // Check the file type
        const allowedFileTypes = ['text/plain'];
        if (!allowedFileTypes.includes(file.type)) {
            return false;
        }

        // Check the file size (in bytes)
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSizeInBytes) {
            return false;
        }

        // Add any additional validation criteria as needed

        return true;
    }


    // only accepts string with numbers and single alphabet splitted with commas
    // "54764367,f,573464,d,57376547456745" -- valid
    // "fw35yytrtg,f34wrtw45g,j76867854,45454" -- invalid
    validInput(input) {
        // check for character other than number alphabet comma
        if (/[^0-9,a-zA-Z]/.test(input)) return false;

        if (/^,|,$|,,/.test(input)) return false;

        return !(/[a-zA-Z0-9]+[a-zA-Z]+|[a-zA-Z]+[a-zA-Z0-9]+/.test(input));
    }


    denumber(input){        
        return input.replace(/[0-9]+/g, '\.');
    }

    replaceNumbersWithAlphabets(input) {
        const denumber = this.denumber(input)

        let result = denumber;
        const regexToken = RegExp(/\.{1}/, 'g');
        const regexAlphabet = RegExp(/[a-zA-Z]{1}/, 'g');
        let tokens;
        let alphabet_prev;
        let alphabet;
        alphabet_prev = 'A';
        regexToken.lastIndex = 0;
        regexAlphabet.lastIndex = 0;
        alphabet = regexAlphabet.exec(denumber);

        if (regexAlphabet.lastIndex === 0){
            result = result.replace(/\.{1}/g, alphabet_prev);
        }

        while ((tokens = regexToken.exec(denumber)) !== null) {
            if (regexToken.lastIndex > regexAlphabet.lastIndex) {
                alphabet_prev = alphabet;
                alphabet = regexAlphabet.exec(denumber);
            }
            result = result.replace(/\.{1}/, alphabet_prev);
        }
        return result;
    }

    stringToBigUintArray(textInput) {
        const values = textInput.split(',').map((value) => value.trim());
        const bigUintArray = new BigUint64Array(values.length);

        for (let i = 0; i < values.length; i++) {
            bigUintArray[i] = BigInt(values[i]);
        }

        return bigUintArray;
    }

    stringToUintArray(textInput) {
        const values = textInput.split(',').map((value) => value.trim());
        const UintArray = new Uint8Array(values.length);

        for (let i = 0; i < values.length; i++) {
            UintArray[i] = values[i];
        }

        return UintArray;
    }

    alphabetArrayFromKey(input) {
        return this.replaceNumbersWithAlphabets(this.denumber(input)).split(',').map((value) => value.trim());
    }

    numberStringFromKey(input) {
        return input.replace(/[a-zA-Z]+/g, '0');
    }

    numberArrayFromKey(input) {
        return this.stringToBigUintArray(this.numberStringFromKey(input));
    }

    adjustInputWidth(input) {
        const textWidth = this.getTextWidth(input.value);
        input.style.width = textWidth + 'px';
    }

    getTextWidth(text) {
        const testElement = document.createElement('span');
        testElement.style.visibility = 'hidden';
        testElement.style.position = 'absolute';
        testElement.style.whiteSpace = 'nowrap';
        testElement.innerText = text;
        document.body.appendChild(testElement);
        const width = testElement.offsetWidth;
        document.body.removeChild(testElement);
        return width;
    }
}