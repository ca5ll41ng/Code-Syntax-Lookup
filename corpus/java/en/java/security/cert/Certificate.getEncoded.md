---
id: "java-en-function-certificate-getencoded"
language: "java"
lang: "en"
category: "function"
name: "Certificate.getEncoded"
signature: "public abstract byte[] getEncoded() throws CertificateEncodingException"
title: "Certificate.getEncoded"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.getEncoded

```java
public abstract byte[] getEncoded() throws CertificateEncodingException
```

Returns the encoded form of this certificate. It is
 assumed that each certificate type would have only a single
 form of encoding; for example, X.509 certificates would
 be encoded as ASN.1 DER.

**返回**

- the encoded form of this certificate

**异常**

- **CertificateEncodingException** — if an encoding error occurs.
