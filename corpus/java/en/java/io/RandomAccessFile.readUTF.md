---
id: "java-en-function-randomaccessfile-readutf"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readUTF"
signature: "public final String readUTF() throws IOException"
title: "RandomAccessFile.readUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readUTF

```java
public final String readUTF() throws IOException
```

Reads in a string from this file. The string has been encoded
 using a
 modified UTF-8
 format.
 

 The first two bytes are read, starting from the current file
 pointer, as if by
 `readUnsignedShort`. This value gives the number of
 following bytes that are in the encoded string, not
 the length of the resulting string. The following bytes are then
 interpreted as bytes encoding characters in the modified UTF-8 format
 and are converted into characters.
 

 This method blocks until all the bytes are read, the end of the
 stream is detected, or an exception is thrown.

**返回**

- a Unicode string.

**异常**

- **EOFException** — if this file reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
- **UTFDataFormatException** — if the bytes do not represent valid modified UTF-8 encoding of a Unicode string.

**参见**

- java.io.RandomAccessFile#readUnsignedShort()
