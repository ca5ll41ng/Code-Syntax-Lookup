---
id: "java-en-function-cipher-unwrap"
language: "java"
lang: "en"
category: "function"
name: "Cipher.unwrap"
signature: "public final Key unwrap(byte[] wrappedKey, String wrappedKeyAlgorithm, int wrappedKeyType) throws InvalidKeyException, NoSuchAlgorithmException"
title: "Cipher.unwrap"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.unwrap

```java
public final Key unwrap(byte[] wrappedKey, String wrappedKeyAlgorithm, int wrappedKeyType) throws InvalidKeyException, NoSuchAlgorithmException
```

Unwrap a previously wrapped key.

**参数**

- **wrappedKey** — the key to be unwrapped
- **wrappedKeyAlgorithm** — the algorithm associated with the wrapped key
- **wrappedKeyType** — the type of the wrapped key. This must be one of `SECRET_KEY`, `PRIVATE_KEY`, or `PUBLIC_KEY`

**返回**

- the unwrapped key

**异常**

- **IllegalStateException** — if this `Cipher` object is in a wrong state (e.g., has not been initialized, or is not in `UNWRAP_MODE`)
- **NoSuchAlgorithmException** — if no installed providers can create keys of type `wrappedKeyType` for the `wrappedKeyAlgorithm`
- **InvalidKeyException** — if `wrappedKey` does not represent a wrapped key of type `wrappedKeyType` for the `wrappedKeyAlgorithm`
- **UnsupportedOperationException** — if the corresponding method in the `CipherSpi` is not supported
