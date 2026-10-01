---
id: "java-en-function-encodedkeyspec-encodedkeyspec"
language: "java"
lang: "en"
category: "function"
name: "EncodedKeySpec.EncodedKeySpec"
signature: "public EncodedKeySpec(byte[] encodedKey)"
title: "EncodedKeySpec.EncodedKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncodedKeySpec.EncodedKeySpec

```java
public EncodedKeySpec(byte[] encodedKey)
```

Creates a new `EncodedKeySpec` with the given encoded key.

**参数**

- **encodedKey** — the encoded key. The contents of the array are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `encodedKey` is null.
