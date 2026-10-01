---
id: "java-en-function-cipherspi-engineupdate"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineUpdate"
signature: "protected abstract byte[] engineUpdate(byte[] input, int inputOffset, int inputLen)"
title: "CipherSpi.engineUpdate"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineUpdate

```java
protected abstract byte[] engineUpdate(byte[] input, int inputOffset, int inputLen)
```

Continues a multiple-part encryption or decryption operation
 (depending on how this `CipherSpi` object was initialized),
 processing another data part.

 

The first `inputLen` bytes in the `input`
 buffer, starting at `inputOffset` inclusive, are processed,
 and the result is stored in a new buffer.

**参数**

- **input** — the input buffer
- **inputOffset** — the offset in `input` where the input starts
- **inputLen** — the input length

**返回**

- the new buffer with the result, or `null` if the cipher is a block cipher and the input data is too short to result in a new block
