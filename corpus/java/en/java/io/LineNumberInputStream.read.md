---
id: "java-en-function-linenumberinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "LineNumberInputStream.read"
signature: "public int read() throws IOException"
title: "LineNumberInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInputStream.read

```java
public int read() throws IOException
```

Reads the next byte of data from this input stream. The value
 byte is returned as an `int` in the range
 `0` to `255`. If no byte is available
 because the end of the stream has been reached, the value
 `-1` is returned. This method blocks until input data
 is available, the end of the stream is detected, or an exception
 is thrown.
 

 The `read` method of
 `LineNumberInputStream` calls the `read`
 method of the underlying input stream. It checks for carriage
 returns and newline characters in the input, and modifies the
 current line number as appropriate. A carriage-return character or
 a carriage return followed by a newline character are both
 converted into a single newline character.

**返回**

- the next byte of data, or `-1` if the end of this stream is reached.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterInputStream#in
- java.io.LineNumberInputStream#getLineNumber()
