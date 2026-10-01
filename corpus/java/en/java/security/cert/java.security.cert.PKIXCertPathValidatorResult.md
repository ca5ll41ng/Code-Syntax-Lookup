---
id: "java-en-function-java-security-cert-pkixcertpathvalidatorresult"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.PKIXCertPathValidatorResult"
title: "PKIXCertPathValidatorResult"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathValidatorResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathValidatorResult

This class represents the successful result of the PKIX certification
 path validation algorithm.

 

Instances of `PKIXCertPathValidatorResult` are returned by the
 `validate validate` method of
 `CertPathValidator` objects implementing the PKIX algorithm.

 

 All `PKIXCertPathValidatorResult` objects contain the
 valid policy tree and subject public key resulting from the
 validation algorithm, as well as a `TrustAnchor` describing
 the certification authority (CA) that served as a trust anchor for the
 certification path.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertPathValidatorResult

> *Since 1.4*
