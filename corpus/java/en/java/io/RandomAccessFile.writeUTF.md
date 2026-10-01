---
id: "java-en-function-randomaccessfile-writeutf"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeUTF"
signature: "public final void writeUTF(String str) throws IOException"
title: "RandomAccessFile.writeUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeUTF

```java
public final void writeUTF(String str) throws IOException
```

Writes a string to the file using
 modified UTF-8
 encoding in a machine-independent manner.
 

 First, two bytes are written to the file, starting at the
 current file pointer, as if by the
 `writeShort` method giving the number of bytes to
 follow. This value is the number of bytes actually written out,
 not the length of the string. Following the length, each character
 of the string is output, in sequence, using the modified UTF-8 encoding
 for each character.

**参数**

- **str** — a string to be written.

**异常**

- **IOException** — if an I/O error occurs.
