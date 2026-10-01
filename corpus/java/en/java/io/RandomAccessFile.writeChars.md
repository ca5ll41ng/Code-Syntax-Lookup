---
id: "java-en-function-randomaccessfile-writechars"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeChars"
signature: "public final void writeChars(String s) throws IOException"
title: "RandomAccessFile.writeChars"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeChars

```java
public final void writeChars(String s) throws IOException
```

Writes a string to the file as a sequence of characters. Each
 character is written to the data output stream as if by the
 `writeChar` method. The write starts at the current
 position of the file pointer.

**参数**

- **s** — a `String` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.RandomAccessFile#writeChar(int)
