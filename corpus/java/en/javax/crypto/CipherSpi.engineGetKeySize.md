---
id: "java-en-function-cipherspi-enginegetkeysize"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineGetKeySize"
signature: "protected int engineGetKeySize(Key key) throws InvalidKeyException"
title: "CipherSpi.engineGetKeySize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineGetKeySize

```java
protected int engineGetKeySize(Key key) throws InvalidKeyException
```

Returns the key size of the given key object in bits.
 

This concrete method has been added to this previously-defined
 abstract class. It throws an `UnsupportedOperationException`
 if it is not overridden by the provider.

**参数**

- **key** — the key object

**返回**

- the key size of the given key object

**异常**

- **InvalidKeyException** — if `key` is invalid
