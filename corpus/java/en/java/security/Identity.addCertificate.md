---
id: "java-en-function-identity-addcertificate"
language: "java"
lang: "en"
category: "function"
name: "Identity.addCertificate"
signature: "public void addCertificate(Certificate certificate) throws KeyManagementException"
title: "Identity.addCertificate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Identity.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Identity.addCertificate

```java
public void addCertificate(Certificate certificate) throws KeyManagementException
```

Adds a certificate for this `Identity`. If the `Identity` has a public
 key, the public key in the certificate must be the same, and if
 the `Identity` does not have a public key, the identity's
 public key is set to be that specified in the certificate.

**参数**

- **certificate** — the certificate to be added.

**异常**

- **KeyManagementException** — if the certificate is not valid, if the public key in the certificate being added conflicts with this identity's public key, or if another exception occurs.
