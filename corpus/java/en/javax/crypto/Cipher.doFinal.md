---
id: "java-en-function-cipher-dofinal"
language: "java"
lang: "en"
category: "function"
name: "Cipher.doFinal"
signature: "public final byte[] doFinal() throws IllegalBlockSizeException, BadPaddingException"
title: "Cipher.doFinal"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.doFinal

```java
public final byte[] doFinal() throws IllegalBlockSizeException, BadPaddingException
```

Finishes a multiple-part encryption or decryption operation, depending
 on how this `Cipher` object was initialized.

 

Input data that may have been buffered during a previous
 `update` operation is processed, with padding (if requested)
 being applied.
 If an AEAD mode such as GCM/CCM is being used, the authentication
 tag is appended in the case of encryption, or verified in the
 case of decryption.
 The result is stored in a new buffer.

**返回**

- the new buffer with the result

**异常**

- **IllegalStateException** — if this `Cipher` object is in an incorrect mode or cannot be reset.
- **IllegalBlockSizeException** — if this cipher is a block cipher, no padding has been requested (only in encryption mode), and the total input length of the data processed by this cipher is not a multiple of block size; or if this encryption algorithm is unable to process the input data provided.
- **BadPaddingException** — if this `Cipher` object is in decryption mode, and (un)padding has been requested, but the decrypted data is not bounded by the appropriate padding bytes
- **AEADBadTagException** — if this `Cipher` object is decrypting in an AEAD mode (such as GCM/CCM), and the received authentication tag does not match the calculated value
