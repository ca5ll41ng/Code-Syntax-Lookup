---
id: "java-en-function-randomaccessfile-readunsignedbyte"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readUnsignedByte"
signature: "public final int readUnsignedByte() throws IOException"
title: "RandomAccessFile.readUnsignedByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readUnsignedByte

```java
public final int readUnsignedByte() throws IOException
```

Reads an unsigned eight-bit number from this file. This method reads
 a byte from this file, starting at the current file pointer,
 and returns that byte.
 

 This method blocks until the byte is read, the end of the stream
 is detected, or an exception is thrown.

**返回**

- the next byte of this file, interpreted as an unsigned eight-bit number.

**异常**

- **EOFException** — if this file has reached the end.
- **IOException** — if an I/O error occurs.
