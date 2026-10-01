---
id: "java-en-function-java-security-cert-certificate"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.Certificate"
title: "Certificate"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate

Abstract class for managing a variety of identity certificates.
 An identity certificate is a binding of a principal to a public key which
 is vouched for by another principal.  (A principal represents
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

**参见**

- X509Certificate
- CertificateFactory

> *Since 1.2*
