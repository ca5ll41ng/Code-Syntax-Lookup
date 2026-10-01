---
id: "java-en-function-javax-crypto-kemspi"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KEMSpi"
title: "KEMSpi"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEMSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEMSpi

This class defines the Service Provider Interface (SPI) for the `KEM`
 class. A security provider implements this interface to provide an
 implementation of a Key Encapsulation Mechanism (KEM) algorithm.
 

 A KEM algorithm may support a family of configurations. Each configuration
 may accept different types of keys, cryptographic primitives, and sizes of
 shared secrets and key encapsulation messages. A configuration is defined
 by the KEM algorithm name, the key it uses, and an optional
 `AlgorithmParameterSpec` argument that is specified when creating
 an encapsulator or decapsulator. The result of calling
 `engineNewEncapsulator` or `engineNewDecapsulator` must return
 an encapsulator or decapsulator that maps to a single configuration,
 where its `engineSecretSize()` and `engineEncapsulationSize()`
 methods return constant values.
 

 A `KEMSpi` implementation must be immutable. It must be safe to
 call multiple `engineNewEncapsulator` and `engineNewDecapsulator`
 methods at the same time.
 

 `EncapsulatorSpi` and `DecapsulatorSpi` implementations must also
 be immutable. It must be safe to invoke multiple `encapsulate` and
 `decapsulate` methods at the same time. Each invocation of
 `encapsulate` should generate a new shared secret and key
 encapsulation message.
 

 For example,
 {@snippet lang = java:
 public static class MyKEMImpl implements KEMSpi {

     public KEMSpi.EncapsulatorSpi engineNewEncapsulator(PublicKey publicKey,
             AlgorithmParameterSpec spec, SecureRandom secureRandom)
             throws InvalidAlgorithmParameterException, InvalidKeyException {
         if (!checkPublicKey(publicKey)) {
             throw new InvalidKeyException("unsupported key");
         }
         if (!checkParameters(spec)) {
             throw new InvalidAlgorithmParameterException("unsupported params");
         }
         return new MyEncapsulator(publicKey, spec, secureRandom);
     }

     class MyEncapsulator implements KEMSpi.EncapsulatorSpi {
         MyEncapsulator(PublicKey publicKey, AlgorithmParameterSpec spec,
                 SecureRandom secureRandom){
             this.spec = spec != null ? spec : getDefaultParameters();
             this.secureRandom = secureRandom != null
                     ? secureRandom
                     : getDefaultSecureRandom();
             this.publicKey = publicKey;
         }

         public KEM.Encapsulated encapsulate(int from, int to, String algorithm) {
             byte[] encapsulation;
             byte[] secret;
             // calculating...
             return new KEM.Encapsulated(
                     new SecretKeySpec(secret, from, to - from, algorithm),
                     encapsulation, null);
         }

         // ...
     }

     // ...
 }
 }

**参见**

- KEM

> *Since 21*
