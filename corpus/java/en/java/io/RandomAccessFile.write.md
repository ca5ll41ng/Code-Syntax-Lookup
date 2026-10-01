---
id: "java-en-function-randomaccessfile-write"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.write"
signature: "public void write(int b) throws IOException"
title: "RandomAccessFile.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.write

```java
public void write(int b) throws IOException
```

Writes the specified byte to this file. The write starts at
 the current file pointer.

**参数**

- **b** — the `byte` to be written.

**异常**

- **IOException** — if an I/O error occurs.
