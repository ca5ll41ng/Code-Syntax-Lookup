---
id: "java-en-function-certpathvalidatorspi-enginegetrevocationchecker"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidatorSpi.engineGetRevocationChecker"
signature: "public CertPathChecker engineGetRevocationChecker()"
title: "CertPathValidatorSpi.engineGetRevocationChecker"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorSpi.engineGetRevocationChecker

```java
public CertPathChecker engineGetRevocationChecker()
```

Returns a `CertPathChecker` that this implementation uses to
 check the revocation status of certificates. A PKIX implementation
 returns objects of type `PKIXRevocationChecker`.

 

The primary purpose of this method is to allow callers to specify
 additional input parameters and options specific to revocation checking.
 See the class description of `CertPathValidator` for an example.

 

This method was added to version 1.8 of the Java Platform Standard
 Edition. In order to maintain backwards compatibility with existing
 service providers, this method cannot be abstract and by default throws
 an `UnsupportedOperationException`.

**返回**

- a `CertPathChecker` that this implementation uses to check the revocation status of certificates

**异常**

- **UnsupportedOperationException** — if this method is not supported

> *Since 1.8*
