---
id: "java-en-function-algorithmparameters-getencoded"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParameters.getEncoded"
signature: "public final byte[] getEncoded() throws IOException"
title: "AlgorithmParameters.getEncoded"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameters.getEncoded

```java
public final byte[] getEncoded() throws IOException
```

Returns the parameters in their primary encoding format.
 The primary encoding format for parameters is ASN.1, if an ASN.1
 specification for this type of parameters exists.

**返回**

- the parameters encoded using their primary encoding format.

**异常**

- **IOException** — on encoding errors, or if this parameter object has not been initialized.
