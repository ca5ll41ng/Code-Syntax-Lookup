---
id: "java-en-function-certpathvalidator-getrevocationchecker"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidator.getRevocationChecker"
signature: "public final CertPathChecker getRevocationChecker()"
title: "CertPathValidator.getRevocationChecker"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidator.getRevocationChecker

```java
public final CertPathChecker getRevocationChecker()
```

Returns a `CertPathChecker` that the encapsulated
 `CertPathValidatorSpi` implementation uses to check the revocation
 status of certificates. A PKIX implementation returns objects of
 type `PKIXRevocationChecker`. Each invocation of this method
 returns a new instance of `CertPathChecker`.

 

The primary purpose of this method is to allow callers to specify
 additional input parameters and options specific to revocation checking.
 See the class description for an example.

**返回**

- a `CertPathChecker`

**异常**

- **UnsupportedOperationException** — if the service provider does not support this method

> *Since 1.8*
