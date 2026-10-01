---
id: "java-en-function-javax-security-cert-certificateexpiredexception"
language: "java"
lang: "en"
category: "function"
name: "javax.security.cert.CertificateExpiredException"
title: "CertificateExpiredException"
directive: "type"
module: "java.base/javax.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/cert/CertificateExpiredException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateExpiredException

Certificate Expired Exception. This is thrown whenever the current
 `Date` or the specified `Date` is after the
 `notAfter` date/time specified in the validity period
 of the certificate.

 

Note: The classes in the package `javax.security.cert`
 exist for compatibility with earlier versions of the
 Java Secure Sockets Extension (JSSE). New applications should instead
 use the standard Java SE certificate classes located in
 `java.security.cert`.

> *Since 1.4*

> **⚠ Deprecated** — Use the classes in `java.security.cert` instead.
