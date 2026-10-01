---
id: "java-en-function-x509certselector-getsubjectpublickey"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getSubjectPublicKey"
signature: "public PublicKey getSubjectPublicKey()"
title: "X509CertSelector.getSubjectPublicKey"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getSubjectPublicKey

```java
public PublicKey getSubjectPublicKey()
```

Returns the subjectPublicKey criterion. The
 `X509Certificate` must contain the specified subject
 public key. If `null`, no subjectPublicKey check will be done.

**返回**

- the subject public key to check for (or `null`)

**参见**

- #setSubjectPublicKey
