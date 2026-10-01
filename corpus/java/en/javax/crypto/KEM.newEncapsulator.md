---
id: "java-en-function-kem-newencapsulator"
language: "java"
lang: "en"
category: "function"
name: "KEM.newEncapsulator"
signature: "public Encapsulator newEncapsulator(PublicKey publicKey) throws InvalidKeyException"
title: "KEM.newEncapsulator"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEM.newEncapsulator

```java
public Encapsulator newEncapsulator(PublicKey publicKey) throws InvalidKeyException
```

Creates a KEM encapsulator on the KEM sender side.
 

 This method is equivalent to `newEncapsulator(publicKey, null, null)`.

**参数**

- **publicKey** — the receiver's public key, must not be `null`

**返回**

- the encapsulator for this key

**异常**

- **InvalidKeyException** — if `publicKey` is `null` or invalid
- **UnsupportedOperationException** — if this method is not supported because an `AlgorithmParameterSpec` must be provided
