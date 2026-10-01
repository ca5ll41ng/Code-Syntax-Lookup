---
id: "java-en-function-certificatefactoryspi-enginegeneratecertpath"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactorySpi.engineGenerateCertPath"
signature: "public CertPath engineGenerateCertPath(InputStream inStream) throws CertificateException"
title: "CertificateFactorySpi.engineGenerateCertPath"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactorySpi.engineGenerateCertPath

```java
public CertPath engineGenerateCertPath(InputStream inStream) throws CertificateException
```

Generates a `CertPath` object and initializes it with
 the data read from the `InputStream` inStream. The data
 is assumed to be in the default encoding.

 

 This method was added to version 1.4 of the Java 2 Platform
 Standard Edition. In order to maintain backwards compatibility with
 existing service providers, this method cannot be `abstract`
 and by default throws an `UnsupportedOperationException`.

**参数**

- **inStream** — an `InputStream` containing the data

**返回**

- a `CertPath` initialized with the data from the `InputStream`

**异常**

- **CertificateException** — if an exception occurs while decoding
- **UnsupportedOperationException** — if the method is not supported

> *Since 1.4*
