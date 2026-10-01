---
id: "java-en-function-kemspi-enginenewdecapsulator"
language: "java"
lang: "en"
category: "function"
name: "KEMSpi.engineNewDecapsulator"
signature: "DecapsulatorSpi engineNewDecapsulator(PrivateKey privateKey, AlgorithmParameterSpec spec) throws InvalidAlgorithmParameterException, InvalidKeyException"
title: "KEMSpi.engineNewDecapsulator"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEMSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEMSpi.engineNewDecapsulator

```java
DecapsulatorSpi engineNewDecapsulator(PrivateKey privateKey, AlgorithmParameterSpec spec) throws InvalidAlgorithmParameterException, InvalidKeyException
```

Creates a KEM decapsulator on the KEM receiver side.

**参数**

- **privateKey** — the receiver's private key, must not be `null`
- **spec** — the optional parameter, can be `null`

**返回**

- the decapsulator for this key

**异常**

- **InvalidAlgorithmParameterException** — if `spec` is invalid or one is required but `spec` is `null`
- **InvalidKeyException** — if `privateKey` is `null` or invalid

**参见**

- KEM#newDecapsulator(PrivateKey, AlgorithmParameterSpec)
