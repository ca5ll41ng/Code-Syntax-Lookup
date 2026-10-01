---
id: "java-en-function-cipherspi-enginegetoutputsize"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineGetOutputSize"
signature: "protected abstract int engineGetOutputSize(int inputLen)"
title: "CipherSpi.engineGetOutputSize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineGetOutputSize

```java
protected abstract int engineGetOutputSize(int inputLen)
```

Returns the length in bytes that an output buffer would
 need to be in order to hold the result of the next `update`
 or `doFinal` operation, given the input length
 `inputLen` (in bytes).

 

This call takes into account any unprocessed (buffered) data from a
 previous `update` call, padding, and AEAD tagging.

 

The actual output length of the next `update` or
 `doFinal` call may be smaller than the length returned by
 this method.

**参数**

- **inputLen** — the input length (in bytes)

**返回**

- the required output buffer size (in bytes)
