---
id: "java-en-function-stringbufferinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "StringBufferInputStream.skip"
signature: "public synchronized long skip(long n)"
title: "StringBufferInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringBufferInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBufferInputStream.skip

```java
public synchronized long skip(long n)
```

Skips `n` bytes of input from this input stream. Fewer
 bytes might be skipped if the end of the input stream is reached.

**参数**

- **n** — {@inheritDoc}

**返回**

- the actual number of bytes skipped.
