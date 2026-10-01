---
id: "java-en-function-java-security-cert-pkixrevocationchecker"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.PKIXRevocationChecker"
title: "PKIXRevocationChecker"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker

A `PKIXCertPathChecker` for checking the revocation status of
 certificates with the PKIX algorithm.

 

A `PKIXRevocationChecker` checks the revocation status of
 certificates with the Online Certificate Status Protocol (OCSP) or
 Certificate Revocation Lists (CRLs). OCSP is described in RFC 2560 and
 is a network protocol for determining the status of a certificate. A CRL
 is a time-stamped list identifying revoked certificates, and RFC 5280
 describes an algorithm for determining the revocation status of certificates
 using CRLs.

 

Each `PKIXRevocationChecker` must be able to check the revocation
 status of certificates with OCSP and CRLs. By default, OCSP is the
 preferred mechanism for checking revocation status, with CRLs as the
 fallback mechanism. However, this preference can be switched to CRLs with
 the `PREFER_CRLS PREFER_CRLS` option. In addition, the fallback
 mechanism can be disabled with the `NO_FALLBACK NO_FALLBACK`
 option.

 

A `PKIXRevocationChecker` is obtained by calling the
 `getRevocationChecker getRevocationChecker` method
 of a PKIX `CertPathValidator`. Additional parameters and options
 specific to revocation can be set (by calling the
 `setOcspResponder setOcspResponder` method for instance). The
 `PKIXRevocationChecker` is added to a `PKIXParameters` object
 using the `addCertPathChecker addCertPathChecker`
 or `setCertPathCheckers setCertPathCheckers` method,
 and then the `PKIXParameters` is passed along with the `CertPath`
 to be validated to the `validate validate` method
 of a PKIX `CertPathValidator`. When supplying a revocation checker in
 this manner, it will be used to check revocation irrespective of the setting
 of the `isRevocationEnabled RevocationEnabled` flag,
 and will override the default revocation checking mechanism of the PKIX
 service provider. Similarly, a `PKIXRevocationChecker` may be added
 to a `PKIXBuilderParameters` object for use with a PKIX
 `CertPathBuilder`.

 

Note that when a `PKIXRevocationChecker` is added to
 `PKIXParameters`, it clones the `PKIXRevocationChecker`;
 thus any subsequent modifications to the `PKIXRevocationChecker`
 have no effect.

 

Any parameter that is not set (or is set to `null`) will be set to
 the default value for that parameter.

 

**Concurrent Access**

 

Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single object
 concurrently should synchronize amongst themselves and provide the
 necessary locking. Multiple threads each manipulating separate objects
 need not synchronize.

      RFC 2560: X.509 Internet Public Key Infrastructure Online Certificate
              Status Protocol - OCSP
      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

> *Since 1.8*
