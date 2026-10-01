---
id: "java-en-function-randomaccessfile-writeboolean"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeBoolean"
signature: "public final void writeBoolean(boolean v) throws IOException"
title: "RandomAccessFile.writeBoolean"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeBoolean

```java
public final void writeBoolean(boolean v) throws IOException
```

Writes a `boolean` to the file as a one-byte value. The
 value `true` is written out as the value
 `(byte)1`; the value `false` is written out
 as the value `(byte)0`. The write starts at
 the current position of the file pointer.

**参数**

- **v** — a `boolean` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
