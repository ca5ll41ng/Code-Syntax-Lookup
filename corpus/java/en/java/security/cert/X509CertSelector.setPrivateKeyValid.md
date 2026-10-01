---
id: "java-en-function-x509certselector-setprivatekeyvalid"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setPrivateKeyValid"
signature: "public void setPrivateKeyValid(Date privateKeyValid)"
title: "X509CertSelector.setPrivateKeyValid"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setPrivateKeyValid

```java
public void setPrivateKeyValid(Date privateKeyValid)
```

Sets the privateKeyValid criterion. The specified date must fall
 within the private key validity period for the
 `X509Certificate`. If `null`, no privateKeyValid
 check will be done.
 

 Note that the `Date` supplied here is cloned to protect
 against subsequent modifications.

**参数**

- **privateKeyValid** — the `Date` to check (or `null`)

**参见**

- #getPrivateKeyValid
