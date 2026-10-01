---
id: "java-en-function-identity-removecertificate"
language: "java"
lang: "en"
category: "function"
name: "Identity.removeCertificate"
signature: "public void removeCertificate(Certificate certificate) throws KeyManagementException"
title: "Identity.removeCertificate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Identity.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Identity.removeCertificate

```java
public void removeCertificate(Certificate certificate) throws KeyManagementException
```

Removes a certificate from this `Identity`.

**参数**

- **certificate** — the certificate to be removed.

**异常**

- **KeyManagementException** — if the certificate is missing, or if another exception occurs.
