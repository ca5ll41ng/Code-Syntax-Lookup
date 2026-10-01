---
id: "java-en-function-java-security-cert-certpathvalidatorexception"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathValidatorException"
title: "CertPathValidatorException"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorException

An exception indicating one of a variety of problems encountered when
 validating a certification path.
 

 A `CertPathValidatorException` provides support for wrapping
 exceptions. The `getCause getCause` method returns the throwable,
 if any, that caused this exception to be thrown.
 

 A `CertPathValidatorException` may also include the
 certification path that was being validated when the exception was thrown,
 the index of the certificate in the certification path that caused the
 exception to be thrown, and the reason that caused the failure. Use the
 `getCertPath getCertPath`, `getIndex getIndex`, and
 `getReason getReason` methods to retrieve this information.

 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertPathValidator

> *Since 1.4*
