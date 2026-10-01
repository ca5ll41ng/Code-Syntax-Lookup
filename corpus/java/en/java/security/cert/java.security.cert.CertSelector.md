---
id: "java-en-function-java-security-cert-certselector"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertSelector"
title: "CertSelector"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertSelector

A selector that defines a set of criteria for selecting
 `Certificate`s. Classes that implement this interface
 are often used to specify which `Certificate`s should
 be retrieved from a `CertStore`.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this interface are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- Certificate
- CertStore
- CertStore#getCertificates

> *Since 1.4*
