---
id: "java-en-function-ecprivatekeyspec-ecprivatekeyspec"
language: "java"
lang: "en"
category: "function"
name: "ECPrivateKeySpec.ECPrivateKeySpec"
signature: "public ECPrivateKeySpec(BigInteger s, ECParameterSpec params)"
title: "ECPrivateKeySpec.ECPrivateKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECPrivateKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECPrivateKeySpec.ECPrivateKeySpec

```java
public ECPrivateKeySpec(BigInteger s, ECParameterSpec params)
```

Creates a new ECPrivateKeySpec with the specified
 parameter values.

**参数**

- **s** — the private value.
- **params** — the associated elliptic curve domain parameters.

**异常**

- **NullPointerException** — if `s` or `params` is null.
