---
id: "java-en-function-java-security-cert-certpathbuilderexception"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathBuilderException"
title: "CertPathBuilderException"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilderException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilderException

An exception indicating one of a variety of problems encountered when
 building a certification path with a `CertPathBuilder`.
 

 A `CertPathBuilderException` provides support for wrapping
 exceptions. The `getCause getCause` method returns the throwable,
 if any, that caused this exception to be thrown.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertPathBuilder

> *Since 1.4*
