---
id: "java-en-function-encoder-encodetostring"
language: "java"
lang: "en"
category: "function"
name: "Encoder.encodeToString"
signature: "public String encodeToString(byte[] src)"
title: "Encoder.encodeToString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encoder.encodeToString

```java
public String encodeToString(byte[] src)
```

Encodes the specified byte array into a String using the `Base64`
 encoding scheme.

 

 This method first encodes all input bytes into a base64 encoded
 byte array and then constructs a new String by using the encoded byte
 array and the `ISO_8859_1
 ISO-8859-1` charset.

 

 In other words, an invocation of this method has exactly the same
 effect as invoking
 `new String(encode(src), StandardCharsets.ISO_8859_1)`.

**参数**

- **src** — the byte array to encode

**返回**

- A String containing the resulting Base64 encoded characters
