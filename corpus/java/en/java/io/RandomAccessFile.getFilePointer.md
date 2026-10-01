---
id: "java-en-function-randomaccessfile-getfilepointer"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.getFilePointer"
signature: "public native long getFilePointer() throws IOException"
title: "RandomAccessFile.getFilePointer"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.getFilePointer

```java
public native long getFilePointer() throws IOException
```

Returns the current offset in this file.

**返回**

- the offset from the beginning of the file, in bytes, at which the next read or write occurs.

**异常**

- **IOException** — if an I/O error occurs.
