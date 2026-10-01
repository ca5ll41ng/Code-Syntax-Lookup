---
id: "java-en-function-javax-security-cert-certificate"
language: "java"
lang: "en"
category: "function"
name: "javax.security.cert.Certificate"
title: "Certificate"
directive: "type"
module: "java.base/javax.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate

Abstract class for managing a variety of identity certificates.
 An identity certificate is a guarantee by a principal that
 a public key is that of another principal.  (A principal represents
 an entity such as an individual user, a group, or a corporation.)

 This class is an abstraction for certificates that have different
 formats but important common uses.  For example, different types of
 certificates, such as X.509 and PGP, share general certificate
 functionality (like encoding and verifying) and
 some types of information (like a public key).
 

 X.509, PGP, and SDSI certificates can all be implemented by
 subclassing the Certificate class, even though they contain different
 sets of information, and they store and retrieve the information in
 different ways.

 

Note: The classes in the package `javax.security.cert`
 exist for compatibility with earlier versions of the
 Java Secure Sockets Extension (JSSE). New applications should instead
 use the standard Java SE certificate classes located in
 `java.security.cert`.

**参见**

- X509Certificate

> *Since 1.4*

> **⚠ Deprecated** — Use the classes in `java.security.cert` instead.
