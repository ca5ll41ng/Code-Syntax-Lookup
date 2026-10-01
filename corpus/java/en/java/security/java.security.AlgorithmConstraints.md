---
id: "java-en-function-java-security-algorithmconstraints"
language: "java"
lang: "en"
category: "function"
name: "java.security.AlgorithmConstraints"
title: "AlgorithmConstraints"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmConstraints.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmConstraints

This interface specifies constraints for cryptographic algorithms,
 keys (key sizes), and other algorithm parameters.
 

 `AlgorithmConstraints` objects are immutable.  An implementation
 of this interface should not provide methods that can change the state
 of an instance once it has been created.
 

 Note that `AlgorithmConstraints` can be used to represent the
 restrictions described by the security properties
 `jdk.certpath.disabledAlgorithms` and
 `jdk.tls.disabledAlgorithms`, or could be used by a
 concrete `PKIXCertPathChecker` to check whether a specified
 certificate in the certification path contains the required algorithm
 constraints.

**参见**

- javax.net.ssl.SSLParameters#getAlgorithmConstraints
- javax.net.ssl.SSLParameters#setAlgorithmConstraints(AlgorithmConstraints)

> *Since 1.7*
