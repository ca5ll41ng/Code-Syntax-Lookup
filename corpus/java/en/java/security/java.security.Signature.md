---
id: "java-en-function-java-security-signature"
language: "java"
lang: "en"
category: "function"
name: "java.security.Signature"
title: "Signature"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature

The `Signature` class is used to provide applications the functionality
 of a digital signature algorithm. Digital signatures are used for
 authentication and integrity assurance of digital data.

 

 The signature algorithm can be, among others, the NIST standard
 DSA, using DSA and SHA-256. The DSA algorithm using the
 SHA-256 message digest algorithm can be specified as `SHA256withDSA`.
 In the case of RSA the signing algorithm could be specified as, for example,
 `SHA256withRSA`.
 The algorithm name must be specified, as there is no default.

 

 A `Signature` object can be used to generate and verify digital
 signatures.

 

 There are three phases to the use of a `Signature` object for
 either signing data or verifying a signature:

 
- Initialization, with either

     

     
- a public key, which initializes the signature for
     verification (see `initVerify(PublicKey) initVerify`), or

     
- a private key (and optionally a Secure Random Number Generator),
     which initializes the signature for signing
     (see `initSign`
     and `initSign`).

     

 
- Updating

 

Depending on the type of initialization, this will update the
 bytes to be signed or verified. See the
 `update(byte) update` methods.

 
- Signing or Verifying a signature on all updated bytes. See the
 `sign() sign` methods and the `verify(byte[]) verify`
 method.

 

 

Note that this class is abstract and extends from
 `SignatureSpi` for historical reasons.
 Application developers should only take notice of the methods defined in
 this `Signature` class; all the methods in
 the superclass are intended for cryptographic service providers who wish to
 supply their own implementations of digital signature algorithms.

 

 Every implementation of the Java platform is required to support the
 following standard `Signature` algorithms. For the "RSASSA-PSS"
 algorithm, implementations must support the parameters in parentheses. For
 the "SHA256withECDSA" and "SHA384withECDSA" algorithms, implementations must
 support the curves in parentheses.
 
 
- `RSASSA-PSS` (MGF1 mask generation function and SHA-256 or SHA-384
      hash algorithms)
 
- `SHA1withDSA`
 
- `SHA256withDSA`
 
- `SHA256withECDSA` (secp256r1)
 
- `SHA384withECDSA` (secp384r1)
 
- `SHA1withRSA`
 
- `SHA256withRSA`
 
- `SHA384withRSA`
 

 These algorithms are described in the 
 Signature section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

> *Since 1.1*
