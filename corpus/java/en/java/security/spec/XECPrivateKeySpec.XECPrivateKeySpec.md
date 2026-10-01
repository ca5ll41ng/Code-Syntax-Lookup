---
id: "java-en-function-xecprivatekeyspec-xecprivatekeyspec"
language: "java"
lang: "en"
category: "function"
name: "XECPrivateKeySpec.XECPrivateKeySpec"
signature: "public XECPrivateKeySpec(AlgorithmParameterSpec params, byte[] scalar)"
title: "XECPrivateKeySpec.XECPrivateKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/XECPrivateKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPrivateKeySpec.XECPrivateKeySpec

```java
public XECPrivateKeySpec(AlgorithmParameterSpec params, byte[] scalar)
```

Construct a private key spec using the supplied parameters and
 encoded scalar value.

**参数**

- **params** — the algorithm parameters
- **scalar** — the unpruned encoded scalar value. This array is copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `params` or `scalar` is null.
