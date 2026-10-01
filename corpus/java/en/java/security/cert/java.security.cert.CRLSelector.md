---
id: "java-en-function-java-security-cert-crlselector"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CRLSelector"
title: "CRLSelector"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CRLSelector

A selector that defines a set of criteria for selecting `CRL`s.
 Classes that implement this interface are often used to specify
 which `CRL`s should be retrieved from a `CertStore`.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this interface are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CRL
- CertStore
- CertStore#getCRLs

> *Since 1.4*
