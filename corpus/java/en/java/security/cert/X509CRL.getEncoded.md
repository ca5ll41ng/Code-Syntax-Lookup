---
id: "java-en-function-x509crl-getencoded"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getEncoded"
signature: "public abstract byte[] getEncoded() throws CRLException"
title: "X509CRL.getEncoded"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getEncoded

```java
public abstract byte[] getEncoded() throws CRLException
```

Returns the ASN.1 DER-encoded form of this CRL.

**返回**

- the encoded form of this certificate

**异常**

- **CRLException** — if an encoding error occurs.
