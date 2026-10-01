---
id: "java-en-function-x509crlentry-getencoded"
language: "java"
lang: "en"
category: "function"
name: "X509CRLEntry.getEncoded"
signature: "public abstract byte[] getEncoded() throws CRLException"
title: "X509CRLEntry.getEncoded"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLEntry.getEncoded

```java
public abstract byte[] getEncoded() throws CRLException
```

Returns the ASN.1 DER-encoded form of this CRL Entry,
 that is the inner SEQUENCE.

**返回**

- the encoded form of this certificate

**异常**

- **CRLException** — if an encoding error occurs.
