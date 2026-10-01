---
id: "java-en-function-hkdfparameterspec-expandonly"
language: "java"
lang: "en"
category: "function"
name: "HKDFParameterSpec.expandOnly"
signature: "static Expand expandOnly(SecretKey prk, byte[] info, int length)"
title: "HKDFParameterSpec.expandOnly"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HKDFParameterSpec.expandOnly

```java
static Expand expandOnly(SecretKey prk, byte[] info, int length)
```

Creates an `Expand` object.

         not greater than 255 * HMAC length. Implementations will also
         enforce that the prk argument is at least as many bytes as the
         HMAC length. Implementations will also enforce that a
         `null` info value is treated as zero-length byte array.

**参数**

- **prk** — the pseudorandom key (PRK); must not be `null`
- **info** — the optional context and application specific information (may be `null`); the byte array is cloned to prevent subsequent modification
- **length** — the length of the output keying material (must be greater than 0)

**返回**

- an `Expand` object

**异常**

- **NullPointerException** — if the `prk` argument is `null`
- **IllegalArgumentException** — if `length` is not greater than 0
