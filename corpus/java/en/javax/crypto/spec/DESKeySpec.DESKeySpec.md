---
id: "java-en-function-deskeyspec-deskeyspec"
language: "java"
lang: "en"
category: "function"
name: "DESKeySpec.DESKeySpec"
signature: "public DESKeySpec(byte[] key) throws InvalidKeyException"
title: "DESKeySpec.DESKeySpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/DESKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DESKeySpec.DESKeySpec

```java
public DESKeySpec(byte[] key) throws InvalidKeyException
```

Creates a DESKeySpec object using the first 8 bytes in
 key as the key material for the DES key.

 

 The bytes that constitute the DES key are those between
 key[0] and key[7] inclusive.

**参数**

- **key** — the buffer with the DES key material. The first 8 bytes of the buffer are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if the given key material is null.
- **InvalidKeyException** — if the given key material is shorter than 8 bytes.
