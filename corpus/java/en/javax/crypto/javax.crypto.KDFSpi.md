---
id: "java-en-function-javax-crypto-kdfspi"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KDFSpi"
title: "KDFSpi"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDFSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDFSpi

This class defines the Service Provider Interface (**SPI**) for the
 Key Derivation Function (`KDF`) class.
 

 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation of a
 particular key derivation function algorithm.
 

 Implementations must provide a public constructor which accepts a `KDFParameters` object if they depend on the default implementation of
 `Provider.Service.newInstance` to construct `KDFSpi` instances.
 The constructor must call `super(params)` passing the parameters
 supplied. The constructor must also throw an
 `InvalidAlgorithmParameterException` if the supplied parameters are
 inappropriate. If a `KDF` object is instantiated with one of the
 `getInstance` methods that contains a `KDFParameters` parameter,
 the user-provided `KDFParameters` object will be passed to the
 constructor of the `KDFSpi` implementation. Otherwise, if it is
 instantiated with one of the `getInstance` methods without a
 `KDFParameters` parameter, a `null` value will be passed to the
 constructor.
 

 Implementations which do not support `KDFParameters` must require
 `null` to be passed, otherwise an
 `InvalidAlgorithmParameterException` will be thrown. On the other hand,
 implementations which require `KDFParameters` should throw an
 `InvalidAlgorithmParameterException` upon receiving a `null`
 value if default parameters cannot be generated or upon receiving `KDFParameters` which are not supported by the implementation.
 

 To aid the caller, implementations may return parameters with additional
 default values or supply random values as used by the underlying `KDF`
 algorithm. See `engineGetParameters` for more details.

**参见**

- KDF
- KDFParameters
- KDF#getParameters()
- SecretKey

> *Since 25*
