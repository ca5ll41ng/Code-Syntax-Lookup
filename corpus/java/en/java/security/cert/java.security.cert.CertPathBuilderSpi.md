---
id: "java-en-function-java-security-cert-certpathbuilderspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathBuilderSpi"
title: "CertPathBuilderSpi"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilderSpi

The Service Provider Interface (**SPI**)
 for the `CertPathBuilder CertPathBuilder` class. All
 `CertPathBuilder` implementations must include a class (the
 SPI class) that extends this class (`CertPathBuilderSpi`) and
 implements all of its methods. In general, instances of this class should
 only be accessed through the `CertPathBuilder` class. For
 details, see the Java Cryptography Architecture.
 

 **Concurrent Access**
 

 Instances of this class need not be protected against concurrent
 access from multiple threads. Threads that need to access a single
 `CertPathBuilderSpi` instance concurrently should synchronize
 amongst themselves and provide the necessary locking before calling the
 wrapping `CertPathBuilder` object.
 

 However, implementations of `CertPathBuilderSpi` may still
 encounter concurrency issues, since multiple threads each
 manipulating a different `CertPathBuilderSpi` instance need not
 synchronize.

> *Since 1.4*
