---
id: "java-en-function-cipherspi-enginedofinal"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineDoFinal"
signature: "protected abstract byte[] engineDoFinal(byte[] input, int inputOffset, int inputLen) throws IllegalBlockSizeException, BadPaddingException"
title: "CipherSpi.engineDoFinal"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineDoFinal

```java
protected abstract byte[] engineDoFinal(byte[] input, int inputOffset, int inputLen) throws IllegalBlockSizeException, BadPaddingException
```

Encrypts or decrypts data in a single-part operation,
 or finishes a multiple-part operation.
 The data is encrypted or decrypted, depending on how this
 `CipherSpi` object was initialized.

 

The first `inputLen` bytes in the `input`
 buffer, starting at `inputOffset` inclusive, and any input
 bytes that may have been buffered during a previous `update`
 operation, are processed, with padding (if requested) being applied.
 If an AEAD mode (such as GCM or CCM) is being used, the authentication
 tag is appended in the case of encryption, or verified in the
 case of decryption.
 The result is stored in a new buffer.

 

Upon finishing, this method resets this `CipherSpi` object
 to the state it was in when previously initialized via a call to
 `engineInit`.
 That is, the object is reset and available to encrypt or decrypt
 (depending on the operation mode that was specified in the call to
 `engineInit`) more data.

 

Note: if any exception is thrown, this `CipherSpi` object
 may need to be reset before it can be used again.

**参数**

- **input** — the input buffer
- **inputOffset** — the offset in `input` where the input starts
- **inputLen** — the input length

**返回**

- the new buffer with the result

**异常**

- **IllegalBlockSizeException** — if this cipher is a block cipher, no padding has been requested (only in encryption mode), and the total input length of the data processed by this cipher is not a multiple of block size; or if this encryption algorithm is unable to process the input data provided
- **BadPaddingException** — if this `CipherSpi` object is in decryption mode, and (un)padding has been requested, but the decrypted data is not bounded by the appropriate padding bytes
- **AEADBadTagException** — if this `CipherSpi` object is decrypting in an AEAD mode (such as GCM or CCM), and the received authentication tag does not match the calculated value
