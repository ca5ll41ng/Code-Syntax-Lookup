---
id: "java-en-function-algorithmparametersspi-enginegetencoded"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParametersSpi.engineGetEncoded"
signature: "protected abstract byte[] engineGetEncoded() throws IOException"
title: "AlgorithmParametersSpi.engineGetEncoded"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParametersSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParametersSpi.engineGetEncoded

```java
protected abstract byte[] engineGetEncoded() throws IOException
```

Returns the parameters in their primary encoding format.
 The primary encoding format for parameters is ASN.1, if an ASN.1
 specification for this type of parameters exists.

**返回**

- the parameters encoded using their primary encoding format.

**异常**

- **IOException** — on encoding errors.
