---
id: "java-en-function-cipher-cipher"
language: "java"
lang: "en"
category: "function"
name: "Cipher.Cipher"
signature: "protected Cipher(CipherSpi cipherSpi, Provider provider, String transformation)"
title: "Cipher.Cipher"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.Cipher

```java
protected Cipher(CipherSpi cipherSpi, Provider provider, String transformation)
```

Creates a `Cipher` object.

**参数**

- **cipherSpi** — the delegate
- **provider** — the provider
- **transformation** — the transformation

**异常**

- **NullPointerException** — if `provider` is `null`
- **IllegalArgumentException** — if the supplied arguments are deemed invalid for constructing the `Cipher` object
