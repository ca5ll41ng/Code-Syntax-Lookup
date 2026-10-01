---
id: "java-en-function-x509certselector-setcertificate"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setCertificate"
signature: "public void setCertificate(X509Certificate cert)"
title: "X509CertSelector.setCertificate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setCertificate

```java
public void setCertificate(X509Certificate cert)
```

Sets the certificateEquals criterion. The specified
 `X509Certificate` must be equal to the
 `X509Certificate` passed to the `match` method.
 If `null`, then this check is not applied.

 

This method is particularly useful when it is necessary to
 match a single certificate. Although other criteria can be specified
 in conjunction with the certificateEquals criterion, it is usually not
 practical or necessary.

**参数**

- **cert** — the `X509Certificate` to match (or `null`)

**参见**

- #getCertificate
