---
id: "java-en-function-randomaccessfile-writelong"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeLong"
signature: "public final void writeLong(long v) throws IOException"
title: "RandomAccessFile.writeLong"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeLong

```java
public final void writeLong(long v) throws IOException
```

Writes a `long` to the file as eight bytes, high byte first.
 The write starts at the current position of the file pointer.

**参数**

- **v** — a `long` to be written.

**异常**

- **IOException** — if an I/O error occurs.
