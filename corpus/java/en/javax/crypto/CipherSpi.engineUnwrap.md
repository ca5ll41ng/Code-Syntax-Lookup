---
id: "java-en-function-cipherspi-engineunwrap"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineUnwrap"
signature: "protected Key engineUnwrap(byte[] wrappedKey, String wrappedKeyAlgorithm, int wrappedKeyType) throws InvalidKeyException, NoSuchAlgorithmException"
title: "CipherSpi.engineUnwrap"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineUnwrap

```java
protected Key engineUnwrap(byte[] wrappedKey, String wrappedKeyAlgorithm, int wrappedKeyType) throws InvalidKeyException, NoSuchAlgorithmException
```

Unwrap a previously wrapped key.

 

This concrete method has been added to this previously-defined
 abstract class. (For backwards compatibility, it cannot be abstract.)
 It may be overridden by a provider to unwrap a previously wrapped key.
 Such an override is expected to throw an `InvalidKeyException` if
 the given wrapped key cannot be unwrapped.
 If this method is not overridden, it always throws an
 `UnsupportedOperationException`.

**参数**

- **wrappedKey** — the key to be unwrapped
- **wrappedKeyAlgorithm** — the algorithm associated with the wrapped key
- **wrappedKeyType** — the type of the wrapped key. This is one of `SECRET_KEY`, `PRIVATE_KEY`, or `PUBLIC_KEY`.

**返回**

- the unwrapped key

**异常**

- **NoSuchAlgorithmException** — if no installed providers can create keys of type `wrappedKeyType` for the `wrappedKeyAlgorithm`
- **InvalidKeyException** — if `wrappedKey` does not represent a wrapped key of type `wrappedKeyType` for the `wrappedKeyAlgorithm`
- **UnsupportedOperationException** — if this method is not supported
