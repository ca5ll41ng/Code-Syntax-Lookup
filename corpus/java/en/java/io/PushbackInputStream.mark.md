---
id: "java-en-function-pushbackinputstream-mark"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.mark"
signature: "public void mark(int readlimit)"
title: "PushbackInputStream.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.mark

```java
public void mark(int readlimit)
```

Marks the current position in this input stream.

 

 The `mark` method of `PushbackInputStream`
 does nothing.

**参数**

- **readlimit** — the maximum limit of bytes that can be read before the mark position becomes invalid.

**参见**

- java.io.InputStream#reset()
