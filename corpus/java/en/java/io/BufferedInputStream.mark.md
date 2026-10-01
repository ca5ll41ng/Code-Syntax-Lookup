---
id: "java-en-function-bufferedinputstream-mark"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.mark"
signature: "public synchronized void mark(int readlimit)"
title: "BufferedInputStream.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.mark

```java
public synchronized void mark(int readlimit)
```

See the general contract of the `mark`
 method of `InputStream`.

**参数**

- **readlimit** — the maximum limit of bytes that can be read before the mark position becomes invalid.

**参见**

- java.io.BufferedInputStream#reset()
