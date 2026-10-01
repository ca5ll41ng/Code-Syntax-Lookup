---
id: "java-en-function-privatekeyentry-privatekeyentry"
language: "java"
lang: "en"
category: "function"
name: "PrivateKeyEntry.PrivateKeyEntry"
signature: "public PrivateKeyEntry(PrivateKey privateKey, Certificate[] chain)"
title: "PrivateKeyEntry.PrivateKeyEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateKeyEntry.PrivateKeyEntry

```java
public PrivateKeyEntry(PrivateKey privateKey, Certificate[] chain)
```

Constructs a `PrivateKeyEntry` with a
 `PrivateKey` and corresponding certificate chain.

 

 The specified `chain` is cloned before it is stored
 in the new `PrivateKeyEntry` object.

**参数**

- **privateKey** — the `PrivateKey`
- **chain** — an array of `Certificate`s representing the certificate chain. The chain must be ordered and contain a `Certificate` at index 0 corresponding to the private key.

**异常**

- **NullPointerException** — if `privateKey` or `chain` is `null`
- **IllegalArgumentException** — if the specified chain has a length of 0, if the specified chain does not contain `Certificate`s of the same type, or if the `PrivateKey` algorithm does not match the algorithm of the `PublicKey` in the end entity `Certificate` (at index 0)
