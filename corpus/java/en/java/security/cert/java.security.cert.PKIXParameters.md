---
id: "java-en-function-java-security-cert-pkixparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.PKIXParameters"
title: "PKIXParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters

Parameters used as input for the PKIX `CertPathValidator`
 algorithm.
 

 A PKIX `CertPathValidator` uses these parameters to
 validate a `CertPath` according to the PKIX certification path
 validation algorithm.

 

To instantiate a `PKIXParameters` object, an
 application must specify one or more most-trusted CAs as defined by
 the PKIX certification path validation algorithm. The most-trusted CAs
 can be specified using one of two constructors. An application
 can call `PKIXParameters`,
 specifying a `Set` of `TrustAnchor` objects, each
 of which identify a most-trusted CA. Alternatively, an application can call
 `PKIXParameters`, specifying a
 `KeyStore` instance containing trusted certificate entries, each
 of which will be considered as a most-trusted CA.
 

 Once a `PKIXParameters` object has been created, other parameters
 can be specified (by calling `setInitialPolicies setInitialPolicies`
 or `setDate setDate`, for instance) and then the
 `PKIXParameters` is passed along with the `CertPath`
 to be validated to `validate
 CertPathValidator.validate`.
 

 Any parameter that is not set (or is set to `null`) will
 be set to the default value for that parameter. The default value for the
 `date` parameter is `null`, which indicates
 the current time when the path is validated. The default for the
 remaining parameters is the least constrained.
 

 **Concurrent Access**
 

 Unless otherwise specified, the methods defined in this class are not
 thread-safe. Multiple threads that need to access a single
 object concurrently should synchronize amongst themselves and
 provide the necessary locking. Multiple threads each manipulating
 separate objects need not synchronize.

**参见**

- CertPathValidator

> *Since 1.4*
