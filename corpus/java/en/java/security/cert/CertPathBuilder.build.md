---
id: "java-en-function-certpathbuilder-build"
language: "java"
lang: "en"
category: "function"
name: "CertPathBuilder.build"
signature: "public final CertPathBuilderResult build(CertPathParameters params) throws CertPathBuilderException, InvalidAlgorithmParameterException"
title: "CertPathBuilder.build"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilder.build

```java
public final CertPathBuilderResult build(CertPathParameters params) throws CertPathBuilderException, InvalidAlgorithmParameterException
```

Attempts to build a certification path using the specified algorithm
 parameter set.

**参数**

- **params** — the algorithm parameters

**返回**

- the result of the build algorithm

**异常**

- **CertPathBuilderException** — if the builder is unable to construct a certification path that satisfies the specified parameters
- **InvalidAlgorithmParameterException** — if the specified parameters are inappropriate for this `CertPathBuilder`
