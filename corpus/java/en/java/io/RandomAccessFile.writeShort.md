---
id: "java-en-function-randomaccessfile-writeshort"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeShort"
signature: "public final void writeShort(int v) throws IOException"
title: "RandomAccessFile.writeShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeShort

```java
public final void writeShort(int v) throws IOException
```

Writes a `short` to the file as two bytes, high byte first.
 The write starts at the current position of the file pointer.

**参数**

- **v** — a `short` to be written.

**异常**

- **IOException** — if an I/O error occurs.
