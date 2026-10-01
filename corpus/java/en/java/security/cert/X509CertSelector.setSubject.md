---
id: "java-en-function-x509certselector-setsubject"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setSubject"
signature: "public void setSubject(X500Principal subject)"
title: "X509CertSelector.setSubject"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setSubject

```java
public void setSubject(X500Principal subject)
```

Sets the subject criterion. The specified distinguished name
 must match the subject distinguished name in the
 `X509Certificate`. If `null`, any subject
 distinguished name will do.

**参数**

- **subject** — a distinguished name as X500Principal (or `null`)

> *Since 1.5*
