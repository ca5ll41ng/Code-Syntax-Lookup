---
id: "java-en-function-filterinputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "FilterInputStream.reset"
signature: "public void reset() throws IOException"
title: "FilterInputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream.reset

```java
public void reset() throws IOException
```

Repositions this stream to the position at the time the
 `mark` method was last called on this input stream.
 

 Stream marks are intended to be used in
 situations where you need to read ahead a little to see what's in
 the stream. Often this is most easily done by invoking some
 general parser. If the stream is of the type handled by the
 parse, it just chugs along happily. If the stream is not of
 that type, the parser should toss an exception when it fails.
 If this happens within readlimit bytes, it allows the outer
 code to reset the stream and try another parser.

 This method simply performs `in.reset()`.

**异常**

- **IOException** — {@inheritDoc}

**参见**

- java.io.FilterInputStream#in
- java.io.FilterInputStream#mark(int)
