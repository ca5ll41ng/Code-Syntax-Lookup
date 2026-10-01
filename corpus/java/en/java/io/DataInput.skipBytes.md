---
id: "java-en-function-datainput-skipbytes"
language: "java"
lang: "en"
category: "function"
name: "DataInput.skipBytes"
signature: "int skipBytes(int n) throws IOException"
title: "DataInput.skipBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.skipBytes

```java
int skipBytes(int n) throws IOException
```

Makes an attempt to skip over
 `n` bytes
 of data from the input
 stream, discarding the skipped bytes. However,
 it may skip
 over some smaller number of
 bytes, possibly zero. This may result from
 any of a
 number of conditions; reaching
 end of file before `n` bytes
 have been skipped is
 only one possibility.
 This method never throws an `EOFException`.
 The actual
 number of bytes skipped is returned.

**参数**

- **n** — the number of bytes to be skipped.

**返回**

- the number of bytes actually skipped.

**异常**

- **IOException** — if an I/O error occurs.
