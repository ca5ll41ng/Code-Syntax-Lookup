---
id: "java-en-function-encoder-wrap"
language: "java"
lang: "en"
category: "function"
name: "Encoder.wrap"
signature: "public OutputStream wrap(OutputStream os)"
title: "Encoder.wrap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encoder.wrap

```java
public OutputStream wrap(OutputStream os)
```

Wraps an output stream for encoding byte data using the `Base64`
 encoding scheme.

 

 It is recommended to promptly close the returned output stream after
 use, during which it will flush all possible leftover bytes to the underlying
 output stream. Closing the returned output stream will close the underlying
 output stream.

**参数**

- **os** — the output stream.

**返回**

- the output stream for encoding the byte data into the specified Base64 encoded format
