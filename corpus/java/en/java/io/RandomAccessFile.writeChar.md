---
id: "java-en-function-randomaccessfile-writechar"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeChar"
signature: "public final void writeChar(int v) throws IOException"
title: "RandomAccessFile.writeChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeChar

```java
public final void writeChar(int v) throws IOException
```

Writes a `char` to the file as a two-byte value, high
 byte first. The write starts at the current position of the
 file pointer.

**参数**

- **v** — a `char` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
