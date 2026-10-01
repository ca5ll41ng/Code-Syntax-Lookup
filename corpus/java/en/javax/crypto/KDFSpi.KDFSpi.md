---
id: "java-en-function-kdfspi-kdfspi"
language: "java"
lang: "en"
category: "function"
name: "KDFSpi.KDFSpi"
signature: "protected KDFSpi(KDFParameters kdfParameters) throws InvalidAlgorithmParameterException"
title: "KDFSpi.KDFSpi"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDFSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDFSpi.KDFSpi

```java
protected KDFSpi(KDFParameters kdfParameters) throws InvalidAlgorithmParameterException
```

The sole constructor.
 

 A `KDFParameters` object may be specified for KDF algorithms that
 support initialization parameters.

**参数**

- **kdfParameters** — the initialization parameters for the `KDF` algorithm (may be `null`)

**异常**

- **InvalidAlgorithmParameterException** — if the initialization parameters are inappropriate for this `KDFSpi`

**参见**

- KDF#getParameters()
