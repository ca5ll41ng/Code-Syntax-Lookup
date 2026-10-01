---
id: "java-en-function-pemdecoder-withfactoriesof"
language: "java"
lang: "en"
category: "function"
name: "PEMDecoder.withFactoriesOf"
signature: "public PEMDecoder withFactoriesOf(Provider provider)"
title: "PEMDecoder.withFactoriesOf"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMDecoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMDecoder.withFactoriesOf

```java
public PEMDecoder withFactoriesOf(Provider provider)
```

Returns a copy of this `PEMDecoder` instance that uses
 `KeyFactory` and `CertificateFactory` implementations
 from the specified `Provider` to produce cryptographic objects.
 Any errors using the `Provider` will occur during decoding.

**参数**

- **provider** — the factory `Provider`

**返回**

- a new `PEMDecoder` instance configured with the `Provider`

**异常**

- **NullPointerException** — if `provider` is `null`
