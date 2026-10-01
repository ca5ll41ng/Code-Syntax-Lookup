---
id: "java-en-function-javax-crypto-kem"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KEM"
title: "KEM"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEM

This class provides the functionality of a Key Encapsulation Mechanism (KEM).
 A KEM can be used to secure symmetric keys using asymmetric or public key
 cryptography between two parties. The sender calls the encapsulate method
 to generate a secret key and a key encapsulation message, and the receiver
 calls the decapsulate method to recover the same secret key from
 the key encapsulation message.
 

 The `getInstance` method creates a new `KEM` object that
 implements the specified algorithm.
 

 A `KEM` object is immutable. It is safe to call multiple
 `newEncapsulator` and `newDecapsulator` methods on the
 same `KEM` object at the same time.
 

 If a provider is not specified in the `getInstance` method when
 instantiating a `KEM` object, the `newEncapsulator` and
 `newDecapsulator` methods may return encapsulators or decapsulators
 from different providers. The provider selected is based on the parameters
 passed to the `newEncapsulator` or `newDecapsulator` methods:
 the private or public key and the optional `AlgorithmParameterSpec`.
 The `providerName` and `providerName`
 methods return the name of the selected provider.
 

 `Encapsulator` and `Decapsulator` objects are also immutable.
 It is safe to invoke multiple `encapsulate` and `decapsulate`
 methods on the same `Encapsulator` or `Decapsulator` object
 at the same time. Each invocation of `encapsulate` will generate a
 new shared secret and key encapsulation message.
 

 Example operation using a fictitious `KEM` algorithm `ABC`:
 {@snippet lang = java:
     // Receiver side
     KeyPairGenerator g = KeyPairGenerator.getInstance("ABC");
     KeyPair kp = g.generateKeyPair();
     publishKey(kp.getPublic());

     // Sender side
     KEM senderKEM = KEM.getInstance("ABC");
     PublicKey receiverPublicKey = retrieveKey();
     ABCKEMParameterSpec senderSpec = new ABCKEMParameterSpec(args);
     KEM.Encapsulator e = senderKEM.newEncapsulator(
             receiverPublicKey, senderSpec, null);
     KEM.Encapsulated enc = e.encapsulate();
     SecretKey senderSecret = enc.key();

     sendBytes(enc.encapsulation());
     sendBytes(enc.params());

     // Receiver side
     byte[] ciphertext = receiveBytes();
     byte[] params = receiveBytes();

     KEM receiverKEM = KEM.getInstance("ABC");
     AlgorithmParameters algParams =
             AlgorithmParameters.getInstance("ABC");
     algParams.init(params);
     ABCKEMParameterSpec receiverSpec =
             algParams.getParameterSpec(ABCKEMParameterSpec.class);
     KEM.Decapsulator d =
             receiverKEM.newDecapsulator(kp.getPrivate(), receiverSpec);
     SecretKey receiverSecret = d.decapsulate(ciphertext);

     // senderSecret and receiverSecret should now be equal.
 }

> *Since 21*
