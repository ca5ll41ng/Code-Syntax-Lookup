---
id: "java-en-function-kdf-derivedata"
language: "java"
lang: "en"
category: "function"
name: "KDF.deriveData"
signature: "public byte[] deriveData(AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException"
title: "KDF.deriveData"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDF.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDF.deriveData

```java
public byte[] deriveData(AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException
```

Derives a key, returns raw data as a byte array.

**参数**

- **derivationSpec** — the object describing the inputs to the derivation function

**返回**

- the derived key in its raw bytes

**异常**

- **InvalidAlgorithmParameterException** — if the information contained within the `derivationSpec` is invalid
- **UnsupportedOperationException** — if the derived keying material is not extractable
- **NullPointerException** — if `derivationSpec` is null

**参见**

- Delayed Provider Selection
