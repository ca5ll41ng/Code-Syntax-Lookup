---
id: "java-en-function-randomaccessfile-readboolean"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readBoolean"
signature: "public final boolean readBoolean() throws IOException"
title: "RandomAccessFile.readBoolean"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readBoolean

```java
public final boolean readBoolean() throws IOException
```

Reads a `boolean` from this file. This method reads a
 single byte from the file, starting at the current file pointer.
 A value of `0` represents
 `false`. Any other value represents `true`.
 This method blocks until the byte is read, the end of the stream
 is detected, or an exception is thrown.

**返回**

- the `boolean` value read.

**异常**

- **EOFException** — if this file has reached the end.
- **IOException** — if an I/O error occurs.
