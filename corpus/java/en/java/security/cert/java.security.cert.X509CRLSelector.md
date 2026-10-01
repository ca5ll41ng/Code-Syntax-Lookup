---
id: "java-en-function-java-security-cert-x509crlselector"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.X509CRLSelector"
title: "X509CRLSelector"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector

A `CRLSelector` that selects `X509CRLs` that
 match all specified criteria. This class is particularly useful when
 selecting CRLs from a `CertStore` to check revocation status
 of a particular certificate.
 

 When first constructed, an `X509CRLSelector` has no criteria
 enabled and each of the `get` methods return a default
 value (`null`). Therefore, the `match match` method
 would return `true` for any `X509CRL`. Typically,
 several criteria are enabled (by calling `setIssuers setIssuers`
 or `setDateAndTime setDateAndTime`, for instance) and then the
 `X509CRLSelector` is passed to
 `getCRLs CertStore.getCRLs` or some similar
 method.
 

 Please refer to RFC 5280:
 Internet X.509 Public Key Infrastructure Certificate and CRL Profile
 for definitions of the X.509 CRL fields and extensions mentioned below.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参见**

- CRLSelector
- X509CRL

> *Since 1.4*
