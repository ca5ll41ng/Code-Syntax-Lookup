---
id: "java-en-function-x509certselector-setcertificatevalid"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setCertificateValid"
signature: "public void setCertificateValid(Date certValid)"
title: "X509CertSelector.setCertificateValid"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setCertificateValid

```java
public void setCertificateValid(Date certValid)
```

Sets the certificateValid criterion. The specified date must fall
 within the certificate validity period for the
 `X509Certificate`. If `null`, no certificateValid
 check will be done.
 

 Note that the `Date` supplied here is cloned to protect
 against subsequent modifications.

**参数**

- **certValid** — the `Date` to check (or `null`)

**参见**

- #getCertificateValid
