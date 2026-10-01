---
id: "java-en-function-decoder-wrap"
language: "java"
lang: "en"
category: "function"
name: "Decoder.wrap"
signature: "public InputStream wrap(InputStream is)"
title: "Decoder.wrap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Decoder.wrap

```java
public InputStream wrap(InputStream is)
```

Returns an input stream for decoding `Base64` encoded byte stream.

 

 The `read`  methods of the returned `InputStream` will
 throw `IOException` when reading bytes that cannot be decoded.

 

 Closing the returned input stream will close the underlying
 input stream.

**参数**

- **is** — the input stream

**返回**

- the input stream for decoding the specified Base64 encoded byte stream
