---
id: "java-en-function-java-security-cert-certificatefactoryspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertificateFactorySpi"
title: "CertificateFactorySpi"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactorySpi

This class defines the Service Provider Interface (**SPI**)
 for the `CertificateFactory` class.
 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a certificate factory for a particular certificate type, e.g., X.509.

 

Certificate factories are used to generate certificate, certification path
 (`CertPath`) and certificate revocation list (CRL) objects from
 their encodings.

 

A certificate factory for X.509 must return certificates that are an
 instance of `java.security.cert.X509Certificate`, and CRLs
 that are an instance of `java.security.cert.X509CRL`.

**参见**

- CertificateFactory
- Certificate
- X509Certificate
- CertPath
- CRL
- X509CRL

> *Since 1.2*
