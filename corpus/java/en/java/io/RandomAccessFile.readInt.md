---
id: "java-en-function-randomaccessfile-readint"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readInt"
signature: "public final int readInt() throws IOException"
title: "RandomAccessFile.readInt"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readInt

```java
public final int readInt() throws IOException
```

Reads a signed 32-bit integer from this file. This method reads 4
 bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are `b1`,
 `b2`, `b3`, and `b4`, where
 `0 <= b1, b2, b3, b4 <= 255`,
 then the result is equal to:
 {@snippet lang=java :
     (b1 << 24) | (b2 << 16) + (b3 << 8) + b4
 }
 

 This method blocks until the four bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- the next four bytes of this file, interpreted as an `int`.

**异常**

- **EOFException** — if this file reaches the end before reading four bytes.
- **IOException** — if an I/O error occurs.
