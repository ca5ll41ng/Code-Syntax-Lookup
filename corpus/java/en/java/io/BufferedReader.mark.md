---
id: "java-en-function-bufferedreader-mark"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.mark"
signature: "public void mark(int readAheadLimit) throws IOException"
title: "BufferedReader.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.mark

```java
public void mark(int readAheadLimit) throws IOException
```

Marks the present position in the stream.  Subsequent calls to reset()
 will attempt to reposition the stream to this point.

**参数**

- **readAheadLimit** — Limit on the number of characters that may be read while still preserving the mark. An attempt to reset the stream after reading characters up to this limit or beyond may fail. A limit value larger than the size of the input buffer will cause a new buffer to be allocated whose size is no smaller than limit. Therefore large values should be used with care.

**异常**

- **IllegalArgumentException** — If `readAheadLimit < 0`
- **IOException** — If an I/O error occurs
