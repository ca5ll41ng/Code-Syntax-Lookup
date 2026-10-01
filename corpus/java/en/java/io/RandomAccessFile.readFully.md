---
id: "java-en-function-randomaccessfile-readfully"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readFully"
signature: "public final void readFully(byte[] b) throws IOException"
title: "RandomAccessFile.readFully"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readFully

```java
public final void readFully(byte[] b) throws IOException
```

Reads `b.length` bytes from this file into the byte
 array, starting at the current file pointer. This method reads
 repeatedly from the file until the requested number of bytes are
 read. This method blocks until the requested number of bytes are
 read, the end of the stream is detected, or an exception is thrown.

**参数**

- **b** — the buffer into which the data is read.

**异常**

- **NullPointerException** — if `b` is `null`.
- **EOFException** — if this file reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
