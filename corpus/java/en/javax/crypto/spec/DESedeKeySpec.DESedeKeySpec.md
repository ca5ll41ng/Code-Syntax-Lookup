---
id: "java-en-function-desedekeyspec-desedekeyspec"
language: "java"
lang: "en"
category: "function"
name: "DESedeKeySpec.DESedeKeySpec"
signature: "public DESedeKeySpec(byte[] key) throws InvalidKeyException"
title: "DESedeKeySpec.DESedeKeySpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/DESedeKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DESedeKeySpec.DESedeKeySpec

```java
public DESedeKeySpec(byte[] key) throws InvalidKeyException
```

Creates a DESedeKeySpec object using the first 24 bytes in
 key as the key material for the DES-EDE key.

 

 The bytes that constitute the DES-EDE key are those between
 key[0] and key[23] inclusive

**参数**

- **key** — the buffer with the DES-EDE key material. The first 24 bytes of the buffer are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if key is null.
- **InvalidKeyException** — if the given key material is shorter than 24 bytes.
