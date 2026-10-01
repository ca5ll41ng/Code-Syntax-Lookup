---
id: "java-en-function-kdf-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KDF.getInstance"
signature: "public static KDF getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KDF.getInstance"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDF.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDF.getInstance

```java
public static KDF getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `KDF` object that implements the specified algorithm.

         `jdk.security.provider.preferred`
         `getProperty(String) Security` property to
         determine the preferred provider order for the specified
         algorithm. This may be different than the order of providers
         returned by
         `getProviders`.

**参数**

- **algorithm** — the key derivation algorithm to use. See the `KDF` section in the Java Security Standard Algorithm Names Specification for information about standard KDF algorithm names.

**返回**

- a `KDF` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KDF` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- Delayed Provider Selection
