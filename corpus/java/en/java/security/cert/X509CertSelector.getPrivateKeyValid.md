---
id: "java-en-function-x509certselector-getprivatekeyvalid"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getPrivateKeyValid"
signature: "public Date getPrivateKeyValid()"
title: "X509CertSelector.getPrivateKeyValid"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getPrivateKeyValid

```java
public Date getPrivateKeyValid()
```

Returns the privateKeyValid criterion. The specified date must fall
 within the private key validity period for the
 `X509Certificate`. If `null`, no privateKeyValid
 check will be done.
 

 Note that the `Date` returned is cloned to protect against
 subsequent modifications.

**返回**

- the `Date` to check (or `null`)

**参见**

- #setPrivateKeyValid
