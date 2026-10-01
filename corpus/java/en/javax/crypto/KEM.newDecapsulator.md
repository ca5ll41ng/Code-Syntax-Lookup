---
id: "java-en-function-kem-newdecapsulator"
language: "java"
lang: "en"
category: "function"
name: "KEM.newDecapsulator"
signature: "public Decapsulator newDecapsulator(PrivateKey privateKey) throws InvalidKeyException"
title: "KEM.newDecapsulator"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEM.newDecapsulator

```java
public Decapsulator newDecapsulator(PrivateKey privateKey) throws InvalidKeyException
```

Creates a KEM decapsulator on the KEM receiver side.
 

 This method is equivalent to `newDecapsulator(privateKey, null)`.

**参数**

- **privateKey** — the receiver's private key, must not be `null`

**返回**

- the decapsulator for this key

**异常**

- **InvalidKeyException** — if `privateKey` is `null` or invalid
- **UnsupportedOperationException** — if this method is not supported because an `AlgorithmParameterSpec` must be provided
