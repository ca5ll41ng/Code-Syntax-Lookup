---
id: "java-en-function-randomaccessfile-writebytes"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeBytes"
signature: "public final void writeBytes(String s) throws IOException"
title: "RandomAccessFile.writeBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeBytes

```java
public final void writeBytes(String s) throws IOException
```

Writes the string to the file as a sequence of bytes. Each
 character in the string is written out, in sequence, by discarding
 its high eight bits. The write starts at the current position of
 the file pointer.

**参数**

- **s** — a string of bytes to be written.

**异常**

- **IOException** — if an I/O error occurs.
