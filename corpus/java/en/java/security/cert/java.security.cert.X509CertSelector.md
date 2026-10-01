---
id: "java-en-function-java-security-cert-x509certselector"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.X509CertSelector"
title: "X509CertSelector"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector

A `CertSelector` that selects `X509Certificates` that
 match all specified criteria. This class is particularly useful when
 selecting certificates from a `CertStore` to build a
 PKIX-compliant certification path.
 

 When first constructed, an `X509CertSelector` has no criteria
 enabled and each of the `get` methods return a default value
 (`null`, or `-1` for the `getBasicConstraints
 getBasicConstraints` method). Therefore, the `match match`
 method would return `true` for any `X509Certificate`.
 Typically, several criteria are enabled (by calling
 `setIssuer` or
 `setKeyUsage setKeyUsage`, for instance) and then the
 `X509CertSelector` is passed to
 `getCertificates CertStore.getCertificates` or some similar
 method.
 

 Several criteria can be enabled (by calling
 `setIssuer`
 and `setSerialNumber setSerialNumber`,
 for example) such that the `match` method
 usually uniquely matches a single `X509Certificate`. We say
 usually, since it is possible for two issuing CAs to have the same
 distinguished name and each issue a certificate with the same serial
 number. Other unique combinations include the issuer, subject,
 subjectKeyIdentifier and/or the subjectPublicKey criteria.
 

 Please refer to RFC 5280:
 Internet X.509 Public Key Infrastructure Certificate and CRL Profile for
 definitions of the X.509 certificate extensions mentioned below.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参见**

- CertSelector
- X509Certificate

> *Since 1.4*
