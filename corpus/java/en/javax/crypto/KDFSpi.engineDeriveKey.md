---
id: "java-en-function-kdfspi-enginederivekey"
language: "java"
lang: "en"
category: "function"
name: "KDFSpi.engineDeriveKey"
signature: "protected abstract SecretKey engineDeriveKey(String alg, AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException"
title: "KDFSpi.engineDeriveKey"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDFSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDFSpi.engineDeriveKey

```java
protected abstract SecretKey engineDeriveKey(String alg, AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException
```

Derives a key, returned as a `SecretKey` object.

         `getEncoded` value should have the same content as the
         result of `deriveData`.

**参数**

- **alg** — the algorithm of the resultant `SecretKey` object. See the SecretKey Algorithms section in the  Java Security Standard Algorithm Names Specification for information about standard secret key algorithm names.
- **derivationSpec** — derivation parameters

**返回**

- the derived key.

**异常**

- **InvalidAlgorithmParameterException** — if the information contained within the `derivationSpec` is invalid or if the combination of `alg` and the `derivationSpec` results in something invalid
- **NoSuchAlgorithmException** — if `alg` is empty or invalid
- **NullPointerException** — if `alg` or `derivationSpec` is null
