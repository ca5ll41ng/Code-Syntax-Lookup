---
id: "java-en-function-reader-mark"
language: "java"
lang: "en"
category: "function"
name: "Reader.mark"
signature: "public void mark(int readAheadLimit) throws IOException"
title: "Reader.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.mark

```java
public void mark(int readAheadLimit) throws IOException
```

Marks the present position in the stream.  Subsequent calls to reset()
 will attempt to reposition the stream to this point.  Not all
 character-input streams support the mark() operation.

**参数**

- **readAheadLimit** — Limit on the number of characters that may be read while still preserving the mark.  After reading this many characters, attempting to reset the stream may fail.

**异常**

- **IOException** — If the stream does not support mark(), or if some other I/O error occurs
