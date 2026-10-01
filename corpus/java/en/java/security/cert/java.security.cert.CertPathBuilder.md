---
id: "java-en-function-java-security-cert-certpathbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathBuilder"
title: "CertPathBuilder"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilder

A class for building certification paths (also known as certificate chains).
 

 This class uses a provider-based architecture.
 To create a `CertPathBuilder`, call
 one of the static `getInstance` methods, passing in the
 algorithm name of the `CertPathBuilder` desired and optionally
 the name of the provider desired.

 

Once a `CertPathBuilder` object has been created, certification
 paths can be constructed by calling the `build build` method and
 passing it an algorithm-specific set of parameters. If successful, the
 result (including the `CertPath` that was built) is returned
 in an object that implements the `CertPathBuilderResult`
 interface.

 

The `getRevocationChecker` method allows an application to specify
 additional algorithm-specific parameters and options used by the
 `CertPathBuilder` when checking the revocation status of certificates.
 Here is an example demonstrating how it is used with the PKIX algorithm:

 
```

 CertPathBuilder cpb = CertPathBuilder.getInstance("PKIX");
 PKIXRevocationChecker rc = (PKIXRevocationChecker)cpb.getRevocationChecker();
 rc.setOptions(EnumSet.of(Option.PREFER_CRLS));
 params.addCertPathChecker(rc);
 CertPathBuilderResult cpbr = cpb.build(params);
 
```

 

Every implementation of the Java platform is required to support the
 following standard `CertPathBuilder` algorithm:
 
 
- `PKIX`
 

 This algorithm is described in the 
 CertPathBuilder section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

 

 **Concurrent Access**
 

 The static methods of this class are guaranteed to be thread-safe.
 Multiple threads may concurrently invoke the static methods defined in
 this class with no ill effects.
 

 However, this is not true for the non-static methods defined by this class.
 Unless otherwise documented by a specific provider, threads that need to
 access a single `CertPathBuilder` instance concurrently should
 synchronize amongst themselves and provide the necessary locking. Multiple
 threads each manipulating a different `CertPathBuilder` instance
 need not synchronize.

**参见**

- CertPath

> *Since 1.4*
