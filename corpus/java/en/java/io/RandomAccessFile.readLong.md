---
id: "java-en-function-randomaccessfile-readlong"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readLong"
signature: "public final long readLong() throws IOException"
title: "RandomAccessFile.readLong"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readLong

```java
public final long readLong() throws IOException
```

Reads a signed 64-bit integer from this file. This method reads eight
 bytes from the file, starting at the current file pointer.
 If the bytes read, in order, are
 `b1`, `b2`, `b3`,
 `b4`, `b5`, `b6`,
 `b7`, and `b8,` where:
 {@snippet :
     0 <= b1, b2, b3, b4, b5, b6, b7, b8 <= 255
 }
 

 then the result is equal to:
 {@snippet lang=java :
     ((long)b1 << 56) + ((long)b2 << 48)
         + ((long)b3 << 40) + ((long)b4 << 32)
         + ((long)b5 << 24) + ((long)b6 << 16)
         + ((long)b7 << 8) + b8
 }
 

 This method blocks until the eight bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- the next eight bytes of this file, interpreted as a `long`.

**异常**

- **EOFException** — if this file reaches the end before reading eight bytes.
- **IOException** — if an I/O error occurs.
