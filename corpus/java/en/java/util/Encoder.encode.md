---
id: "java-en-function-encoder-encode"
language: "java"
lang: "en"
category: "function"
name: "Encoder.encode"
signature: "public byte[] encode(byte[] src)"
title: "Encoder.encode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encoder.encode

```java
public byte[] encode(byte[] src)
```

Encodes all bytes from the specified byte array into a newly-allocated
 byte array using the `Base64` encoding scheme. The returned byte
 array is of the length of the resulting bytes.

**参数**

- **src** — the byte array to encode

**返回**

- A newly-allocated byte array containing the resulting encoded bytes.
