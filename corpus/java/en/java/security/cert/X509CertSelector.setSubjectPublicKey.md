---
id: "java-en-function-x509certselector-setsubjectpublickey"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setSubjectPublicKey"
signature: "public void setSubjectPublicKey(PublicKey key)"
title: "X509CertSelector.setSubjectPublicKey"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setSubjectPublicKey

```java
public void setSubjectPublicKey(PublicKey key)
```

Sets the subjectPublicKey criterion. The
 `X509Certificate` must contain the specified subject public
 key. If `null`, no subjectPublicKey check will be done.

**参数**

- **key** — the subject public key to check for (or `null`)

**参见**

- #getSubjectPublicKey
