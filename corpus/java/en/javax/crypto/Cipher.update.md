---
id: "java-en-function-cipher-update"
language: "java"
lang: "en"
category: "function"
name: "Cipher.update"
signature: "public final byte[] update(byte[] input)"
title: "Cipher.update"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.update

```java
public final byte[] update(byte[] input)
```

Continues a multiple-part encryption or decryption operation
 (depending on how this `Cipher` object was initialized),
 processing another data part.

 

The bytes in the `input` buffer are processed, and the
 result is stored in a new buffer.

 

If `input` has a length of zero, this method returns
 `null`.

**参数**

- **input** — the input buffer

**返回**

- the new buffer with the result, or `null` if this cipher is a block cipher and the input data is too short to result in a new block

**异常**

- **IllegalStateException** — if this `Cipher` object is in a wrong state (e.g., has not been initialized, or is not in `ENCRYPT_MODE` or `DECRYPT_MODE`)
