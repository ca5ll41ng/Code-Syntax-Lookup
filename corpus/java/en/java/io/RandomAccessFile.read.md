---
id: "java-en-function-randomaccessfile-read"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.read"
signature: "public int read() throws IOException"
title: "RandomAccessFile.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.read

```java
public int read() throws IOException
```

Reads a byte of data from this file. The byte is returned as an
 integer in the range 0 to 255 (`0x00-0x0ff`). This
 method blocks if no input is yet available.
 

 Although `RandomAccessFile` is not a subclass of
 `InputStream`, this method behaves in exactly the same
 way as the `read` method of
 `InputStream`.

**返回**

- the next byte of data, or `-1` if the end of the file has been reached.

**异常**

- **IOException** — if an I/O error occurs. Not thrown if end-of-file has been reached.
