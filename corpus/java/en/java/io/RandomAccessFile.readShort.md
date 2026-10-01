---
id: "java-en-function-randomaccessfile-readshort"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readShort"
signature: "public final short readShort() throws IOException"
title: "RandomAccessFile.readShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readShort

```java
public final short readShort() throws IOException
```

Reads a signed 16-bit number from this file. The method reads two
 bytes from this file, starting at the current file pointer.
 If the two bytes read, in order, are
 `b1` and `b2`, where each of the two values is
 between `0` and `255`, inclusive, then the
 result is equal to:
 {@snippet lang=java :
     (short)((b1 << 8) | b2)
 }
 

 This method blocks until the two bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- the next two bytes of this file, interpreted as a signed 16-bit number.

**异常**

- **EOFException** — if this file reaches the end before reading two bytes.
- **IOException** — if an I/O error occurs.
