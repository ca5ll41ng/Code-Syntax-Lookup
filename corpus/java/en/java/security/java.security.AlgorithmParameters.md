---
id: "java-en-function-java-security-algorithmparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.AlgorithmParameters"
title: "AlgorithmParameters"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameters

This class is used as an opaque representation of cryptographic parameters.

 

An `AlgorithmParameters` object for managing the parameters
 for a particular algorithm can be obtained by
 calling one of the `getInstance` factory methods
 (static methods that return instances of a given class).

 

Once an `AlgorithmParameters` object is obtained, it must be
 initialized via a call to `init`, using an appropriate parameter
 specification or parameter encoding.

 

A transparent parameter specification is obtained from an
 `AlgorithmParameters` object via a call to
 `getParameterSpec`, and a byte encoding of the parameters is
 obtained via a call to `getEncoded`.

 

 Every implementation of the Java platform is required to support the
 following standard `AlgorithmParameters` algorithms. For the "EC"
 algorithm, implementations must support the curves in parentheses. For the
 "RSASSA-PSS" algorithm, implementations must support the parameters in
 parentheses.
 
 
- `AES`
 
- `ChaCha20-Poly1305`
 
- `DiffieHellman`
 
- `DSA`
 
- `EC` (secp256r1, secp384r1)
 
- `PBEWithHmacSHA256AndAES_128`
 
- `PBEWithHmacSHA256AndAES_256`
 
- `RSASSA-PSS` (MGF1 mask generation function and SHA-256 or SHA-384
     hash algorithms)
 

 These algorithms are described in the 
 AlgorithmParameters section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- java.security.spec.AlgorithmParameterSpec
- java.security.spec.DSAParameterSpec
- KeyPairGenerator

> *Since 1.2*
