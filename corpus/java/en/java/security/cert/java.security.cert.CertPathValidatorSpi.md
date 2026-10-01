---
id: "java-en-function-java-security-cert-certpathvalidatorspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathValidatorSpi"
title: "CertPathValidatorSpi"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorSpi

The Service Provider Interface (**SPI**)
 for the `CertPathValidator CertPathValidator` class. All
 `CertPathValidator` implementations must include a class (the
 SPI class) that extends this class (`CertPathValidatorSpi`)
 and implements all of its methods. In general, instances of this class
 should only be accessed through the `CertPathValidator` class.
 For details, see the Java Cryptography Architecture.
 

 **Concurrent Access**
 

 Instances of this class need not be protected against concurrent
 access from multiple threads. Threads that need to access a single
 `CertPathValidatorSpi` instance concurrently should synchronize
 amongst themselves and provide the necessary locking before calling the
 wrapping `CertPathValidator` object.
 

 However, implementations of `CertPathValidatorSpi` may still
 encounter concurrency issues, since multiple threads each
 manipulating a different `CertPathValidatorSpi` instance need not
 synchronize.

> *Since 1.4*
