---
id: "java-en-function-javax-crypto-kem-encapsulated"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KEM.Encapsulated"
title: "Encapsulated"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encapsulated

This class specifies the return value of the encapsulate method of
 a Key Encapsulation Mechanism (KEM), which includes the shared secret
 (as a `SecretKey`), the key encapsulation message,
 and optional parameters.
 

 Note: the key encapsulation message can be also referred to as ciphertext.

**参见**

- #newEncapsulator(PublicKey, AlgorithmParameterSpec, SecureRandom)
- Encapsulator#encapsulate(int, int, String)

> *Since 21*
