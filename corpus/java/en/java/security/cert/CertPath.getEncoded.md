---
id: "java-en-function-certpath-getencoded"
language: "java"
lang: "en"
category: "function"
name: "CertPath.getEncoded"
signature: "public abstract byte[] getEncoded() throws CertificateEncodingException"
title: "CertPath.getEncoded"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.getEncoded

```java
public abstract byte[] getEncoded() throws CertificateEncodingException
```

Returns the encoded form of this certification path, using the default
 encoding.

**返回**

- the encoded bytes

**异常**

- **CertificateEncodingException** — if an encoding error occurs
