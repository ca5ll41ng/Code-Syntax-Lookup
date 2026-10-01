---
id: "java-en-function-x509certselector-getcertificatevalid"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getCertificateValid"
signature: "public Date getCertificateValid()"
title: "X509CertSelector.getCertificateValid"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getCertificateValid

```java
public Date getCertificateValid()
```

Returns the certificateValid criterion. The specified date must fall
 within the certificate validity period for the
 `X509Certificate`. If `null`, no certificateValid
 check will be done.
 

 Note that the `Date` returned is cloned to protect against
 subsequent modifications.

**返回**

- the `Date` to check (or `null`)

**参见**

- #setCertificateValid
