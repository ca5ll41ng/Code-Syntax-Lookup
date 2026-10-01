---
id: "java-en-function-javax-security-cert-certificatenotyetvalidexception"
language: "java"
lang: "en"
category: "function"
name: "javax.security.cert.CertificateNotYetValidException"
title: "CertificateNotYetValidException"
directive: "type"
module: "java.base/javax.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/cert/CertificateNotYetValidException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateNotYetValidException

Certificate is not yet valid exception. This is thrown whenever
 the current `Date` or the specified `Date`
 is before the `notBefore` date/time in the Certificate
 validity period.

 

Note: The classes in the package `javax.security.cert`
 exist for compatibility with earlier versions of the
 Java Secure Sockets Extension (JSSE). New applications should instead
 use the standard Java SE certificate classes located in
 `java.security.cert`.

> *Since 1.4*

> **⚠ Deprecated** — Use the classes in `java.security.cert` instead.
