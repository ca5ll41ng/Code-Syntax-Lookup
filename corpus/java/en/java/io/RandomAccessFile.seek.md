---
id: "java-en-function-randomaccessfile-seek"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.seek"
signature: "public void seek(long pos) throws IOException"
title: "RandomAccessFile.seek"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.seek

```java
public void seek(long pos) throws IOException
```

Sets the file-pointer offset, measured from the beginning of this
 file, at which the next read or write occurs.  The offset may be
 set beyond the end of the file. Setting the offset beyond the end
 of the file does not change the file length.  The file length will
 change only by writing after the offset has been set beyond the end
 of the file.

**参数**

- **pos** — the offset position, measured in bytes from the beginning of the file, at which to set the file pointer.

**异常**

- **IOException** — if `pos` is less than `0` or if an I/O error occurs.
