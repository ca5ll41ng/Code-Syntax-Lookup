---
id: "java-en-function-kem-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KEM.getInstance"
signature: "public static KEM getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KEM.getInstance"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KEM.getInstance

```java
public static KEM getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `KEM` object that implements the specified algorithm.

**参数**

- **algorithm** — the name of the KEM algorithm. See the `KEM` section in the Java Security Standard Algorithm Names Specification for information about standard KEM algorithm names.

**返回**

- the new `KEM` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KEM` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`
