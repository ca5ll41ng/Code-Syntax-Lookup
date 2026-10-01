---
id: "java-en-function-java-security-keypairgenerator"
language: "java"
lang: "en"
category: "function"
name: "java.security.KeyPairGenerator"
title: "KeyPairGenerator"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGenerator

The `KeyPairGenerator` class is used to generate pairs of
 public and private keys. Key pair generators are constructed using the
 `getInstance` factory methods (static methods that
 return instances of a given class).

 

A Key pair generator for a particular algorithm creates a public/private
 key pair that can be used with this algorithm. It also associates
 algorithm-specific parameters with each of the generated keys.

 

There are two ways to generate a key pair: in an algorithm-independent
 manner, and in an algorithm-specific manner.
 The only difference between the two is the initialization of the object:

 
 
- **Algorithm-Independent Initialization**
 

All key pair generators share the concepts of a keysize and a
 source of randomness. The keysize is interpreted differently for different
 algorithms (e.g., in the case of the DSA algorithm, the keysize
 corresponds to the length of the modulus).
 There is an
 `initialize(int, java.security.SecureRandom) initialize`
 method in this `KeyPairGenerator` class that takes these two universally
 shared types of arguments. There is also one that takes just a
 `keysize` argument, and uses the `SecureRandom`
 implementation of the highest-priority installed provider as the source
 of randomness. (If none of the installed providers supply an implementation
 of `SecureRandom`, a system-provided source of randomness is
 used.)

 

Since no other parameters are specified when you call the above
 algorithm-independent `initialize` methods, it is up to the
 provider what to do about the algorithm-specific parameters (if any) to be
 associated with each of the keys. See the
 `security_guide_jdk_providers JDK Providers` document for information
 on the default algorithm-specific parameters used by JDK providers.

 
- **Algorithm-Specific Initialization**
 

For situations where a set of algorithm-specific parameters already
 exists (e.g., so-called community parameters in DSA), there are two
 `initialize(java.security.spec.AlgorithmParameterSpec)
 initialize` methods that have an `AlgorithmParameterSpec`
 argument. One also has a `SecureRandom` argument, while
 the other uses the `SecureRandom`
 implementation of the highest-priority installed provider as the source
 of randomness. (If none of the installed providers supply an implementation
 of `SecureRandom`, a system-provided source of randomness is
 used.)
 

 

In case the client does not explicitly initialize the
 `KeyPairGenerator`
 (via a call to an `initialize` method), each provider must
 supply (and document) a default initialization.
 See the Keysize Restriction sections of the
 `security_guide_jdk_providers JDK Providers`
 document for information on the `KeyPairGenerator` defaults used by
 JDK providers.
 However, note that defaults may vary across different providers.
 Additionally, the default value for a provider may change in a future
 version. Therefore, it is recommended to explicitly initialize the
 `KeyPairGenerator` instead of relying on provider-specific defaults.

 

Note that this class is abstract and extends from
 `KeyPairGeneratorSpi` for historical reasons.
 Application developers should only take notice of the methods defined in
 this `KeyPairGenerator` class; all the methods in
 the superclass are intended for cryptographic service providers who wish to
 supply their own implementations of key pair generators.

 

 Every implementation of the Java platform is required to support the
 following standard `KeyPairGenerator` algorithms. For the "EC"
 algorithm, implementations must support the curves in parentheses. For other
 algorithms, implementations must support the key sizes in parentheses.
 
 
- `DiffieHellman` (1024, 2048, 3072, 4096)
 
- `DSA` (1024, 2048)
 
- `EC` (secp256r1, secp384r1)
 
- `RSA` (1024, 2048, 3072, 4096)
 
- `RSASSA-PSS` (2048, 3072, 4096)
 
- `X25519`
 

 These algorithms are described in the 
 KeyPairGenerator section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- java.security.spec.AlgorithmParameterSpec

> *Since 1.1*
