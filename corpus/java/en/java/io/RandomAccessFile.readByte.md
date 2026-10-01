---
id: "java-en-function-randomaccessfile-readbyte"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readByte"
signature: "public final byte readByte() throws IOException"
title: "RandomAccessFile.readByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readByte

```java
public final byte readByte() throws IOException
```

Reads a signed eight-bit value from this file. This method reads a
 byte from the file, starting from the current file pointer.
 If the byte read is `b`, where
 `0 <= b <= 255`,
 then the result is:
 {@snippet lang=java :
     (byte)(b)
 }
 

 This method blocks until the byte is read, the end of the stream
 is detected, or an exception is thrown.

**返回**

- the next byte of this file as a signed eight-bit `byte`.

**异常**

- **EOFException** — if this file has reached the end.
- **IOException** — if an I/O error occurs.
