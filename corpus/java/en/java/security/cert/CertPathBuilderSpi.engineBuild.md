---
id: "java-en-function-certpathbuilderspi-enginebuild"
language: "java"
lang: "en"
category: "function"
name: "CertPathBuilderSpi.engineBuild"
signature: "public abstract CertPathBuilderResult engineBuild(CertPathParameters params) throws CertPathBuilderException, InvalidAlgorithmParameterException"
title: "CertPathBuilderSpi.engineBuild"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilderSpi.engineBuild

```java
public abstract CertPathBuilderResult engineBuild(CertPathParameters params) throws CertPathBuilderException, InvalidAlgorithmParameterException
```

Attempts to build a certification path using the specified
 algorithm parameter set.

**参数**

- **params** — the algorithm parameters

**返回**

- the result of the build algorithm

**异常**

- **CertPathBuilderException** — if the builder is unable to construct a certification path that satisfies the specified parameters
- **InvalidAlgorithmParameterException** — if the specified parameters are inappropriate for this `CertPathBuilder`
