---
id: "java-en-function-stringbufferinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "StringBufferInputStream.read"
signature: "public synchronized int read()"
title: "StringBufferInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringBufferInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBufferInputStream.read

```java
public synchronized int read()
```

Reads the next byte of data from this input stream. The value
 byte is returned as an `int` in the range
 `0` to `255`. If no byte is available
 because the end of the stream has been reached, the value
 `-1` is returned.

 The `read` method of
 `StringBufferInputStream` cannot block. It returns the
 low eight bits of the next character in this input stream's buffer.

**返回**

- {@inheritDoc}
