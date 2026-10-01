---
id: "java-en-function-randomaccessfile-readchar"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readChar"
signature: "public final char readChar() throws IOException"
title: "RandomAccessFile.readChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readChar

```java
public final char readChar() throws IOException
```

Reads a character from this file. This method reads two
 bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are
 `b1` and `b2`, where
 `0 <= b1, b2 <= 255`,
 then the result is equal to:
 {@snippet lang=java :
     (char)((b1 << 8) | b2)
 }
 

 This method blocks until the two bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- the next two bytes of this file, interpreted as a `char`.

**异常**

- **EOFException** — if this file reaches the end before reading two bytes.
- **IOException** — if an I/O error occurs.
