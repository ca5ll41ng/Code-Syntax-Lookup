---
id: "java-en-function-chararrayreader-mark"
language: "java"
lang: "en"
category: "function"
name: "CharArrayReader.mark"
signature: "public void mark(int readAheadLimit) throws IOException"
title: "CharArrayReader.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/CharArrayReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharArrayReader.mark

```java
public void mark(int readAheadLimit) throws IOException
```

Marks the present position in the stream.  Subsequent calls to reset()
 will reposition the stream to this point.

**参数**

- **readAheadLimit** — Limit on the number of characters that may be read while still preserving the mark.  Because the stream's input comes from a character array, there is no actual limit; hence this argument is ignored.

**异常**

- **IOException** — If an I/O error occurs
