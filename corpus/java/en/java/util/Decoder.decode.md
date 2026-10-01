---
id: "java-en-function-decoder-decode"
language: "java"
lang: "en"
category: "function"
name: "Decoder.decode"
signature: "public byte[] decode(byte[] src)"
title: "Decoder.decode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Decoder.decode

```java
public byte[] decode(byte[] src)
```

Decodes all bytes from the input byte array using the `Base64`
 encoding scheme, writing the results into a newly-allocated output
 byte array. The returned byte array is of the length of the resulting
 bytes.

**参数**

- **src** — the byte array to decode

**返回**

- A newly-allocated byte array containing the decoded bytes.

**异常**

- **IllegalArgumentException** — if `src` is not in valid Base64 scheme
