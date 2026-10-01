---
id: "java-en-function-zipfile-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.getInputStream"
signature: "public InputStream getInputStream(ZipEntry entry) throws IOException"
title: "ZipFile.getInputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.getInputStream

```java
public InputStream getInputStream(ZipEntry entry) throws IOException
```

Returns an input stream for reading the contents of the specified
 ZIP file entry.
 

 Closing this ZIP file will, in turn, close all input streams that
 have been returned by invocations of this method.

 `java.util.zip.InflaterInputStream InflaterInputStream`, whose
 `read(byte[], int, int)
 read` method can modify any element of the output
 buffer.

**参数**

- **entry** — the ZIP file entry

**返回**

- the input stream for reading the contents of the specified ZIP file entry or null if the ZIP file entry does not exist within the ZIP file.

**异常**

- **ZipException** — if a ZIP format error has occurred
- **IOException** — if an I/O error has occurred
- **IllegalStateException** — if the ZIP file has been closed
