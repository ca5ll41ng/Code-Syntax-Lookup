---
id: "java-en-function-java-security-cert-certpathvalidator"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathValidator"
title: "CertPathValidator"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidator

A class for validating certification paths (also known as certificate
 chains).
 

 This class uses a provider-based architecture.
 To create a `CertPathValidator`,
 call one of the static `getInstance` methods, passing in the
 algorithm name of the `CertPathValidator` desired and
 optionally the name of the provider desired.

 

Once a `CertPathValidator` object has been created, it can
 be used to validate certification paths by calling the `validate
 validate` method and passing it the `CertPath` to be validated
 and an algorithm-specific set of parameters. If successful, the result is
 returned in an object that implements the
 `CertPathValidatorResult` interface.

 

The `getRevocationChecker` method allows an application to specify
 additional algorithm-specific parameters and options used by the
 `CertPathValidator` when checking the revocation status of
 certificates. Here is an example demonstrating how it is used with the PKIX
 algorithm:

 
```

 CertPathValidator cpv = CertPathValidator.getInstance("PKIX");
 PKIXRevocationChecker rc = (PKIXRevocationChecker)cpv.getRevocationChecker();
 rc.setOptions(EnumSet.of(Option.SOFT_FAIL));
 params.addCertPathChecker(rc);
 CertPathValidatorResult cpvr = cpv.validate(path, params);
 
```

 

Every implementation of the Java platform is required to support the
 following standard `CertPathValidator` algorithm:
 
 
- `PKIX`
 

 This algorithm is described in the 
 CertPathValidator section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

 

 **Concurrent Access**
 

 The static methods of this class are guaranteed to be thread-safe.
 Multiple threads may concurrently invoke the static methods defined in
 this class with no ill effects.
 

 However, this is not true for the non-static methods defined by this class.
 Unless otherwise documented by a specific provider, threads that need to
 access a single `CertPathValidator` instance concurrently should
 synchronize amongst themselves and provide the necessary locking. Multiple
 threads each manipulating a different `CertPathValidator`
 instance need not synchronize.

**参见**

- CertPath

> *Since 1.4*
