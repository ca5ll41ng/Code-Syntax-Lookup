---
id: "java-en-function-java-security-cert-pkixbuilderparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.PKIXBuilderParameters"
title: "PKIXBuilderParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXBuilderParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXBuilderParameters

Parameters used as input for the PKIX `CertPathBuilder`
 algorithm.
 

 A PKIX `CertPathBuilder` uses these parameters to `build build` a `CertPath` which has been
 validated according to the PKIX certification path validation algorithm.

 

To instantiate a `PKIXBuilderParameters` object, an
 application must specify one or more most-trusted CAs as defined by
 the PKIX certification path validation algorithm. The most-trusted CA
 can be specified using one of two constructors. An application
 can call `PKIXBuilderParameters(Set, CertSelector)
 PKIXBuilderParameters`, specifying a
 `Set` of `TrustAnchor` objects, each of which
 identifies a most-trusted CA. Alternatively, an application can call
 `PKIXBuilderParameters(KeyStore, CertSelector)
 PKIXBuilderParameters`, specifying a
 `KeyStore` instance containing trusted certificate entries, each
 of which will be considered as a most-trusted CA.

 

In addition, an application must specify constraints on the target
 certificate that the `CertPathBuilder` will attempt
 to build a path to. The constraints are specified as a
 `CertSelector` object. These constraints should provide the
 `CertPathBuilder` with enough search criteria to find the target
 certificate. Minimal criteria for an `X509Certificate` usually
 include the subject name and/or one or more subject alternative names.
 If enough criteria is not specified, the `CertPathBuilder`
 may throw a `CertPathBuilderException`.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertPathBuilder

> *Since 1.4*
