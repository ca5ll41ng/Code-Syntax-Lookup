---
id: "java-en-function-linenumberinputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "LineNumberInputStream.reset"
signature: "public void reset() throws IOException"
title: "LineNumberInputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInputStream.reset

```java
public void reset() throws IOException
```

Repositions this stream to the position at the time the
 `mark` method was last called on this input stream.
 

 The `reset` method of
 `LineNumberInputStream` resets the line number to be
 the line number at the time the `mark` method was
 called, and then calls the `reset` method of the
 underlying input stream.
 

 Stream marks are intended to be used in
 situations where you need to read ahead a little to see what's in
 the stream. Often this is most easily done by invoking some
 general parser. If the stream is of the type handled by the
 parser, it just chugs along happily. If the stream is not of
 that type, the parser should toss an exception when it fails,
 which, if it happens within readlimit bytes, allows the outer
 code to reset the stream and try another parser.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterInputStream#in
- java.io.LineNumberInputStream#mark(int)
