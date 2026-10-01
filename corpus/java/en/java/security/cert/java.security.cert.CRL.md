---
id: "java-en-function-java-security-cert-crl"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CRL"
title: "CRL"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CRL

This class is an abstraction of certificate revocation lists (CRLs) that
 have different formats but important common uses. For example, all CRLs
 share the functionality of listing revoked certificates, and can be queried
 on whether they list a given certificate.
 

 Specialized CRL types can be defined by subclassing off of this abstract
 class.

**参见**

- X509CRL
- CertificateFactory

> *Since 1.2*
