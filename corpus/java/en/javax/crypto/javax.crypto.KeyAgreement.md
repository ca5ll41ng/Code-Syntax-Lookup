---
id: "java-en-function-javax-crypto-keyagreement"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KeyAgreement"
title: "KeyAgreement"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyAgreement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyAgreement

This class provides the functionality of a key agreement (or key
 exchange) protocol.
 

 The keys involved in establishing a shared secret are created by one of the
 key generators (`KeyPairGenerator` or
 `KeyGenerator`), a `KeyFactory`, or as a result from
 an intermediate phase of the key agreement protocol.

 

 For each of the correspondents in the key exchange, `doPhase`
 needs to be called. For example, if this key exchange is with one other
 party, `doPhase` needs to be called once, with the
 `lastPhase` flag set to `true`.
 If this key exchange is
 with two other parties, `doPhase` needs to be called twice,
 the first time setting the `lastPhase` flag to
 `false`, and the second time setting it to `true`.
 There may be any number of parties involved in a key exchange.  However,
 support for key exchanges with more than two parties is implementation
 specific or as specified by the standard key agreement algorithm.

 

 Every implementation of the Java platform is required to support the
 following standard `KeyAgreement` algorithms. For the "ECDH"
 algorithm, implementations must support the curves in parentheses.
 
 
- `DiffieHellman`
 
- `ECDH` (secp256r1, secp384r1)
 
- `X25519`
 

 These algorithms are described in the 
 KeyAgreement section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- KeyGenerator
- SecretKey

> *Since 1.4*
