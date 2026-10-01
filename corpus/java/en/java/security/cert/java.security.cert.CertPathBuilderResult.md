---
id: "java-en-function-java-security-cert-certpathbuilderresult"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathBuilderResult"
title: "CertPathBuilderResult"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilderResult

A specification of the result of a certification path builder algorithm.
 All results returned by the `build
 CertPathBuilder.build` method must implement this interface.
 

 At a minimum, a `CertPathBuilderResult` contains the
 `CertPath` built by the `CertPathBuilder` instance.
 Implementations of this interface may add methods to return implementation
 or algorithm specific information, such as debugging information or
 certification path validation results.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this interface are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertPathBuilder

> *Since 1.4*
