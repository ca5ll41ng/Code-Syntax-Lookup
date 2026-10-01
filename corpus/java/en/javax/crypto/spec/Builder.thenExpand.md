---
id: "java-en-function-builder-thenexpand"
language: "java"
lang: "en"
category: "function"
name: "Builder.thenExpand"
signature: "public ExtractThenExpand thenExpand(byte[] info, int length)"
title: "Builder.thenExpand"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.thenExpand

```java
public ExtractThenExpand thenExpand(byte[] info, int length)
```

Builds an `ExtractThenExpand` object from the current state of
 the `Builder`.

         is not greater than 255 * HMAC length. HKDF implementations
         will also enforce that a `null` info value is
         treated as zero-length byte array.

**参数**

- **info** — the optional context and application specific information (may be `null`); the byte array is cloned to prevent subsequent modification
- **length** — the length of the output keying material (must be greater than 0)

**返回**

- an immutable `ExtractThenExpand` object

**异常**

- **IllegalArgumentException** — if `length` is not greater than 0
