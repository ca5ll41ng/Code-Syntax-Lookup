---
id: "java-en-function-crl-isrevoked"
language: "java"
lang: "en"
category: "function"
name: "CRL.isRevoked"
signature: "public abstract boolean isRevoked(Certificate cert)"
title: "CRL.isRevoked"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CRL.isRevoked

```java
public abstract boolean isRevoked(Certificate cert)
```

Checks whether the given certificate is on this CRL.

**参数**

- **cert** — the certificate to check for.

**返回**

- true if the given certificate is on this CRL, false otherwise.
