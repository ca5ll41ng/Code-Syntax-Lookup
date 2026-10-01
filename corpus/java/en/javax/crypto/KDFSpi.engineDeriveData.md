---
id: "java-en-function-kdfspi-enginederivedata"
language: "java"
lang: "en"
category: "function"
name: "KDFSpi.engineDeriveData"
signature: "protected abstract byte[] engineDeriveData( AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException"
title: "KDFSpi.engineDeriveData"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDFSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDFSpi.engineDeriveData

```java
protected abstract byte[] engineDeriveData( AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException
```

Derives a key, returns raw data as a byte array.

**参数**

- **derivationSpec** — derivation parameters

**返回**

- the derived key in its raw bytes.

**异常**

- **InvalidAlgorithmParameterException** — if the information contained within the `derivationSpec` is invalid
- **UnsupportedOperationException** — if the derived keying material is not extractable
- **NullPointerException** — if `derivationSpec` is null
