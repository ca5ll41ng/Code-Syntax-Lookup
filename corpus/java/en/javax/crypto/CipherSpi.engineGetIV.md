---
id: "java-en-function-cipherspi-enginegetiv"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineGetIV"
signature: "protected abstract byte[] engineGetIV()"
title: "CipherSpi.engineGetIV"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineGetIV

```java
protected abstract byte[] engineGetIV()
```

Returns the initialization vector (IV) in a new buffer.

 

 This is useful in the context of password-based encryption or
 decryption, where the IV is derived from a user-provided passphrase.

**返回**

- the initialization vector in a new buffer, or `null` if the algorithm does not use an IV, or if the IV has not yet been set
