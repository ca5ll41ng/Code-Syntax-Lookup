---
id: "java-en-function-kemspi-enginenewencapsulator"
language: "java"
lang: "en"
category: "function"
name: "KEMSpi.engineNewEncapsulator"
signature: "EncapsulatorSpi engineNewEncapsulator(PublicKey publicKey, AlgorithmParameterSpec spec, SecureRandom secureRandom) throws InvalidAlgorithmParameterException, InvalidKeyException"
title: "KEMSpi.engineNewEncapsulator"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEMSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEMSpi.engineNewEncapsulator

```java
EncapsulatorSpi engineNewEncapsulator(PublicKey publicKey, AlgorithmParameterSpec spec, SecureRandom secureRandom) throws InvalidAlgorithmParameterException, InvalidKeyException
```

Creates a KEM encapsulator on the KEM sender side.

**参数**

- **publicKey** — the receiver's public key, must not be `null`
- **spec** — the optional parameter, can be `null`
- **secureRandom** — the source of randomness for encapsulation. If `null`, the implementation must provide a default one.

**返回**

- the encapsulator for this key

**异常**

- **InvalidAlgorithmParameterException** — if `spec` is invalid or one is required but `spec` is `null`
- **InvalidKeyException** — if `publicKey` is `null` or invalid

**参见**

- KEM#newEncapsulator(PublicKey, AlgorithmParameterSpec, SecureRandom)
