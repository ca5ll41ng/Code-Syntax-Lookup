---
id: "java-en-function-java-security-interfaces-dsakeypairgenerator"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.DSAKeyPairGenerator"
title: "DSAKeyPairGenerator"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/DSAKeyPairGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DSAKeyPairGenerator

An interface to an object capable of generating DSA key pairs.

 

The `initialize` methods may each be called any number
 of times. If no `initialize` method is called on a
 DSAKeyPairGenerator, each provider that implements this interface
 should supply (and document) a default initialization. Note that
 defaults may vary across different providers. Additionally, the default
 value for a provider may change in a future version. Therefore, it is
 recommended to explicitly initialize the DSAKeyPairGenerator instead
 of relying on provider-specific defaults.

 

Users wishing to indicate DSA-specific parameters, and to generate a key
 pair suitable for use with the DSA algorithm typically

 

 
- Get a key pair generator for the DSA algorithm by calling the
 KeyPairGenerator `getInstance` method with "DSA"
 as its argument.

 
- Check if the returned key pair generator is an instance of
 DSAKeyPairGenerator before casting the result to a DSAKeyPairGenerator
 and calling one of the `initialize` methods from this
 DSAKeyPairGenerator interface.

 
- Generate a key pair by calling the `generateKeyPair`
 method of the KeyPairGenerator class.

 

 

Note: it is not always necessary to do algorithm-specific
 initialization for a DSA key pair generator. That is, it is not always
 necessary to call an `initialize` method in this interface.
 Algorithm-independent initialization using the `initialize` method
 in the KeyPairGenerator
 interface is all that is needed when you accept defaults for algorithm-specific
 parameters.

 

Note: Some earlier implementations of this interface may not support
 larger values of DSA parameters such as 3072-bit.

**参见**

- java.security.KeyPairGenerator

> *Since 1.1*
