---
id: "java-en-function-x509crlselector-setcertificatechecking"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.setCertificateChecking"
signature: "public void setCertificateChecking(X509Certificate cert)"
title: "X509CRLSelector.setCertificateChecking"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.setCertificateChecking

```java
public void setCertificateChecking(X509Certificate cert)
```

Sets the certificate being checked. This is not a criterion. Rather,
 it is optional information that may help a `CertStore`
 find CRLs that would be relevant when checking revocation for the
 specified certificate. If `null` is specified, then no
 such optional information is provided.

**参数**

- **cert** — the `X509Certificate` being checked (or `null`)

**参见**

- #getCertificateChecking
