---
id: "java-en-function-randomaccessfile-readdouble"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readDouble"
signature: "public final double readDouble() throws IOException"
title: "RandomAccessFile.readDouble"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readDouble

```java
public final double readDouble() throws IOException
```

Reads a `double` from this file. This method reads a
 `long` value, starting at the current file pointer,
 as if by the `readLong` method
 and then converts that `long` to a `double`
 using the `longBitsToDouble` method in
 class `Double`.
 

 This method blocks until the eight bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- the next eight bytes of this file, interpreted as a `double`.

**异常**

- **EOFException** — if this file reaches the end before reading eight bytes.
- **IOException** — if an I/O error occurs.

**参见**

- java.io.RandomAccessFile#readLong()
- java.lang.Double#longBitsToDouble(long)
