---
id: "java-en-function-edecprivatekeyspec-edecprivatekeyspec"
language: "java"
lang: "en"
category: "function"
name: "EdECPrivateKeySpec.EdECPrivateKeySpec"
signature: "public EdECPrivateKeySpec(NamedParameterSpec params, byte[] bytes)"
title: "EdECPrivateKeySpec.EdECPrivateKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdECPrivateKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPrivateKeySpec.EdECPrivateKeySpec

```java
public EdECPrivateKeySpec(NamedParameterSpec params, byte[] bytes)
```

Construct a private key spec using the supplied parameters and
 bit string.

**参数**

- **params** — the algorithm parameters.
- **bytes** — the key as a byte array. This array is copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `params` or `bytes` is null.
