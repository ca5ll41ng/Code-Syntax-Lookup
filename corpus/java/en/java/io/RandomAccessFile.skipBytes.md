---
id: "java-en-function-randomaccessfile-skipbytes"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.skipBytes"
signature: "public int skipBytes(int n) throws IOException"
title: "RandomAccessFile.skipBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.skipBytes

```java
public int skipBytes(int n) throws IOException
```

Attempts to skip over `n` bytes of input discarding the
 skipped bytes.
 

 This method may skip over some smaller number of bytes, possibly zero.
 This may result from any of a number of conditions; reaching end of
 file before `n` bytes have been skipped is only one
 possibility. This method never throws an `EOFException`.
 The actual number of bytes skipped is returned.  If `n`
 is negative, no bytes are skipped.

**参数**

- **n** — the number of bytes to be skipped.

**返回**

- the actual number of bytes skipped.

**异常**

- **IOException** — if an I/O error occurs.
