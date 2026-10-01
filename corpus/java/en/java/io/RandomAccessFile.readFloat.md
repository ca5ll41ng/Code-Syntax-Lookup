---
id: "java-en-function-randomaccessfile-readfloat"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readFloat"
signature: "public final float readFloat() throws IOException"
title: "RandomAccessFile.readFloat"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readFloat

```java
public final float readFloat() throws IOException
```

Reads a `float` from this file. This method reads an
 `int` value, starting at the current file pointer,
 as if by the `readInt` method
 and then converts that `int` to a `float`
 using the `intBitsToFloat` method in class
 `Float`.
 

 This method blocks until the four bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- the next four bytes of this file, interpreted as a `float`.

**异常**

- **EOFException** — if this file reaches the end before reading four bytes.
- **IOException** — if an I/O error occurs.

**参见**

- java.io.RandomAccessFile#readInt()
- java.lang.Float#intBitsToFloat(int)
