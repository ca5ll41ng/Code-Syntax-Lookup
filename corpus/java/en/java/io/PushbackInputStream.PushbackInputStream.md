---
id: "java-en-function-pushbackinputstream-pushbackinputstream"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.PushbackInputStream"
signature: "public PushbackInputStream(InputStream in, int size)"
title: "PushbackInputStream.PushbackInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.PushbackInputStream

```java
public PushbackInputStream(InputStream in, int size)
```

Creates a `PushbackInputStream`
 with a pushback buffer of the specified `size`,
 and saves its argument, the input stream
 `in`, for later use. Initially,
 the pushback buffer is empty.

**参数**

- **in** — the input stream from which bytes will be read.
- **size** — the size of the pushback buffer.

**异常**

- **IllegalArgumentException** — if `size <= 0`

> *Since 1.1*
