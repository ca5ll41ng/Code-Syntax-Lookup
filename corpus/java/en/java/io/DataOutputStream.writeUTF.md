---
id: "java-en-function-dataoutputstream-writeutf"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeUTF"
signature: "public final void writeUTF(String str) throws IOException"
title: "DataOutputStream.writeUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeUTF

```java
public final void writeUTF(String str) throws IOException
```

Writes a string to the underlying output stream using
 modified UTF-8
 encoding in a machine-independent manner.
 

 First, two bytes are written to the output stream as if by the
 `writeShort` method giving the number of bytes to
 follow. This value is the number of bytes actually written out,
 not the length of the string. Following the length, each character
 of the string is output, in sequence, using the modified UTF-8 encoding
 for the character. If no exception is thrown, the counter
 `written` is incremented by the total number of
 bytes written to the output stream. This will be at least two
 plus the length of `str`, and at most two plus
 thrice the length of `str`.

**参数**

- **str** — a string to be written.

**异常**

- **UTFDataFormatException** — if the modified UTF-8 encoding of `str` would exceed 65535 bytes in length
- **IOException** — if some other I/O error occurs.

**参见**

- #writeChars(String)
