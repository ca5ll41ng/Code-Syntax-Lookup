---
id: "java-en-function-java-security-algorithmparametergenerator"
language: "java"
lang: "en"
category: "function"
name: "java.security.AlgorithmParameterGenerator"
title: "AlgorithmParameterGenerator"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameterGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameterGenerator

The `AlgorithmParameterGenerator` class is used to generate a
 set of
 parameters to be used with a certain algorithm. Parameter generators
 are constructed using the `getInstance` factory methods
 (static methods that return instances of a given class).

 

The object that will generate the parameters can be initialized
 in two different ways: in an algorithm-independent manner, or in an
 algorithm-specific manner:

 
 
- The algorithm-independent approach uses the fact that all parameter
 generators share the concept of a "size" and a
 source of randomness. The measure of size is universally shared
 by all algorithm parameters, though it is interpreted differently
 for different algorithms. For example, in the case of parameters for
 the DSA algorithm, "size" corresponds to the size
 of the prime modulus (in bits).
 When using this approach, algorithm-specific parameter generation
 values - if any - default to some standard values, unless they can be
 derived from the specified size.

 
- The other approach initializes a parameter generator object
 using algorithm-specific semantics, which are represented by a set of
 algorithm-specific parameter generation values. To generate
 Diffie-Hellman system parameters, for example, the parameter generation
 values usually
 consist of the size of the prime modulus and the size of the
 random exponent, both specified in number of bits.
 

 

In case the client does not explicitly initialize the
 `AlgorithmParameterGenerator` (via a call to an `init` method),
 each provider must supply (and document) a default initialization.
 See the Keysize Restriction sections of the
 `security_guide_jdk_providers JDK Providers`
 document for information on the AlgorithmParameterGenerator defaults
 used by JDK providers.
 However, note that defaults may vary across different providers.
 Additionally, the default value for a provider may change in a future
 version. Therefore, it is recommended to explicitly initialize the
 `AlgorithmParameterGenerator` instead of relying on provider-specific
 defaults.

 

 Every implementation of the Java platform is required to support the
 following standard `AlgorithmParameterGenerator` algorithms and
 keysizes in parentheses:
 
 
- `DiffieHellman` (1024, 2048)
 
- `DSA` (1024, 2048)
 

 These algorithms are described in the 
 AlgorithmParameterGenerator section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- AlgorithmParameters
- java.security.spec.AlgorithmParameterSpec

> *Since 1.2*
