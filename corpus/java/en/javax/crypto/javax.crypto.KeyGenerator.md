---
id: "java-en-function-javax-crypto-keygenerator"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KeyGenerator"
title: "KeyGenerator"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyGenerator

This class provides the functionality of a secret (symmetric) key generator.

 

Key generators are constructed using one of the `getInstance`
 class methods of this class.

 

`KeyGenerator` objects are reusable, i.e., after a key has been
 generated, the same `KeyGenerator` object can be re-used
 to generate further keys.

 

There are two ways to generate a key: in an algorithm-independent
 manner, and in an algorithm-specific manner.
 The only difference between the two is the initialization of the object:

 
 
- **Algorithm-Independent Initialization**
 

All key generators share the concepts of a keysize and a
 source of randomness.
 There is an
 `init(int, java.security.SecureRandom) init`
 method in this `KeyGenerator` class that takes these two universally
 shared types of arguments. There is also one that takes just a
 `keysize` argument, and uses the `SecureRandom` implementation
 of the highest-priority installed provider as the source of randomness
 (or a system-provided source of randomness if none of the installed
 providers supply a SecureRandom implementation), and one that takes just a
 source of randomness.

 

Since no other parameters are specified when you call the above
 algorithm-independent `init` methods, it is up to the
 provider what to do about the algorithm-specific parameters (if any) to be
 associated with each of the keys.

 
- **Algorithm-Specific Initialization**
 

For situations where a set of algorithm-specific parameters already
 exists, there are two
 `init(java.security.spec.AlgorithmParameterSpec) init`
 methods that have an `AlgorithmParameterSpec`
 argument. One also has a `SecureRandom` argument, while the
 other uses the SecureRandom implementation
 of the highest-priority installed provider as the source of randomness
 (or a system-provided source of randomness if none of the installed
 providers supply a SecureRandom implementation).
 

 

In case the client does not explicitly initialize the `KeyGenerator`
 (via a call to an `init` method), each provider must
 supply (and document) a default initialization.
 See the Keysize Restriction sections of the
 `security_guide_jdk_providers JDK Providers`
 document for information on the `KeyGenerator` defaults used by
 JDK providers.
 However, note that defaults may vary across different providers.
 Additionally, the default value for a provider may change in a future
 version. Therefore, it is recommended to explicitly initialize the
 `KeyGenerator` instead of relying on provider-specific defaults.

 

 Every implementation of the Java platform is required to support the
 following standard `KeyGenerator` algorithms with the keysizes in
 parentheses:
 
 
- `AES` (128, 256)
 
- `ChaCha20`
 
- `HmacSHA1`
 
- `HmacSHA256`
 

 These algorithms are described in the 
 KeyGenerator section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- SecretKey

> *Since 1.4*
