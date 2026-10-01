---
id: "java-en-function-certificatefactory-generatecertpath"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactory.generateCertPath"
signature: "public final CertPath generateCertPath(InputStream inStream) throws CertificateException"
title: "CertificateFactory.generateCertPath"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory.generateCertPath

```java
public final CertPath generateCertPath(InputStream inStream) throws CertificateException
```

Generates a `CertPath` object and initializes it with
 the data read from the `InputStream` inStream. The data
 is assumed to be in the default encoding. The name of the default
 encoding is the first element of the `Iterator` returned by
 the `getCertPathEncodings getCertPathEncodings` method.

**参数**

- **inStream** — an `InputStream` containing the data

**返回**

- a `CertPath` initialized with the data from the `InputStream`

**异常**

- **CertificateException** — if an exception occurs while decoding

> *Since 1.4*
