---
id: "java-en-function-x509crl-gettbscertlist"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getTBSCertList"
signature: "public abstract byte[] getTBSCertList() throws CRLException"
title: "X509CRL.getTBSCertList"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getTBSCertList

```java
public abstract byte[] getTBSCertList() throws CRLException
```

Gets the DER-encoded CRL information, the
 `tbsCertList` from this CRL.
 This can be used to verify the signature independently.

**返回**

- the DER-encoded CRL information.

**异常**

- **CRLException** — if an encoding error occurs.
