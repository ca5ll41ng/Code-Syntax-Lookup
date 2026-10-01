---
id: "java-en-function-macspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "MacSpi.engineInit"
signature: "protected abstract void engineInit(Key key, AlgorithmParameterSpec params) throws InvalidKeyException, InvalidAlgorithmParameterException"
title: "MacSpi.engineInit"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/MacSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MacSpi.engineInit

```java
protected abstract void engineInit(Key key, AlgorithmParameterSpec params) throws InvalidKeyException, InvalidAlgorithmParameterException
```

Initializes the MAC with the given (secret) key and algorithm
 parameters.

**参数**

- **key** — the (secret) key.
- **params** — the algorithm parameters.

**异常**

- **InvalidKeyException** — if the given key is inappropriate for initializing this MAC.
- **InvalidAlgorithmParameterException** — if the given algorithm parameters are inappropriate for this MAC.
