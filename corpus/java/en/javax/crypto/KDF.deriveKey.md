---
id: "java-en-function-kdf-derivekey"
language: "java"
lang: "en"
category: "function"
name: "KDF.deriveKey"
signature: "public SecretKey deriveKey(String alg, AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException"
title: "KDF.deriveKey"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDF.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDF.deriveKey

```java
public SecretKey deriveKey(String alg, AlgorithmParameterSpec derivationSpec) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException
```

Derives a key, returned as a `SecretKey` object.

**参数**

- **alg** — the algorithm of the resultant `SecretKey` object. See the SecretKey Algorithms section in the  Java Security Standard Algorithm Names Specification for information about standard secret key algorithm names.
- **derivationSpec** — the object describing the inputs to the derivation function

**返回**

- the derived key

**异常**

- **InvalidAlgorithmParameterException** — if the information contained within the `derivationSpec` is invalid or if the combination of `alg` and the `derivationSpec` results in something invalid
- **NoSuchAlgorithmException** — if `alg` is empty or invalid
- **NullPointerException** — if `alg` or `derivationSpec` is null

**参见**

- Delayed Provider Selection
