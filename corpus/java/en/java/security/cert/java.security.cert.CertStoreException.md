---
id: "java-en-function-java-security-cert-certstoreexception"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertStoreException"
title: "CertStoreException"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStoreException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStoreException

An exception indicating one of a variety of problems retrieving
 certificates and CRLs from a `CertStore`.
 

 A `CertStoreException` provides support for wrapping
 exceptions. The `getCause getCause` method returns the throwable,
 if any, that caused this exception to be thrown.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertStore

> *Since 1.4*
