---
id: "java-en-function-randomaccessfile-writebyte"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeByte"
signature: "public final void writeByte(int v) throws IOException"
title: "RandomAccessFile.writeByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeByte

```java
public final void writeByte(int v) throws IOException
```

Writes a `byte` to the file as a one-byte value. The
 write starts at the current position of the file pointer.

**参数**

- **v** — a `byte` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
