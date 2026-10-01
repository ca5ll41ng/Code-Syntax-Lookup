---
id: "java-en-function-pkixcertpathvalidatorresult-getpublickey"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathValidatorResult.getPublicKey"
signature: "public PublicKey getPublicKey()"
title: "PKIXCertPathValidatorResult.getPublicKey"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathValidatorResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathValidatorResult.getPublicKey

```java
public PublicKey getPublicKey()
```

Returns the public key of the subject (target) of the certification
 path, including any inherited public key parameters if applicable.

**返回**

- the public key of the subject (never `null`)
