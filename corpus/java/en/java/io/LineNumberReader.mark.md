---
id: "java-en-function-linenumberreader-mark"
language: "java"
lang: "en"
category: "function"
name: "LineNumberReader.mark"
signature: "public void mark(int readAheadLimit) throws IOException"
title: "LineNumberReader.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberReader.mark

```java
public void mark(int readAheadLimit) throws IOException
```

Mark the present position in the stream.  Subsequent calls to reset()
 will attempt to reposition the stream to this point, and will also reset
 the line number appropriately.

**参数**

- **readAheadLimit** — Limit on the number of characters that may be read while still preserving the mark.  After reading this many characters, attempting to reset the stream may fail.

**异常**

- **IOException** — If an I/O error occurs
