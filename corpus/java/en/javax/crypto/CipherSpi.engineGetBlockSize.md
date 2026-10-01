---
id: "java-en-function-cipherspi-enginegetblocksize"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineGetBlockSize"
signature: "protected abstract int engineGetBlockSize()"
title: "CipherSpi.engineGetBlockSize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineGetBlockSize

```java
protected abstract int engineGetBlockSize()
```

Returns the block size (in bytes).

**返回**

- the block size (in bytes), or 0 if the algorithm is not a block cipher
