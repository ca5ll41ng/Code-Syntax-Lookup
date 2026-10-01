---
id: "java-en-function-randomaccessfile-writeint"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeInt"
signature: "public final void writeInt(int v) throws IOException"
title: "RandomAccessFile.writeInt"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeInt

```java
public final void writeInt(int v) throws IOException
```

Writes an `int` to the file as four bytes, high byte first.
 The write starts at the current position of the file pointer.

**参数**

- **v** — an `int` to be written.

**异常**

- **IOException** — if an I/O error occurs.
