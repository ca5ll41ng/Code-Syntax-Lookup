---
id: "java-en-function-jarfile-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "JarFile.getInputStream"
signature: "public synchronized InputStream getInputStream(ZipEntry ze) throws IOException"
title: "JarFile.getInputStream"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.getInputStream

```java
public synchronized InputStream getInputStream(ZipEntry ze) throws IOException
```

Returns an input stream for reading the contents of the specified
 ZIP file entry.

 `java.util.zip.InflaterInputStream InflaterInputStream`, whose
 `read(byte[], int, int)
 read` method can modify any element of the output
 buffer.

**参数**

- **ze** — the ZIP file entry

**返回**

- an input stream for reading the contents of the specified ZIP file entry or null if the ZIP file entry does not exist within the jar file

**异常**

- **ZipException** — if a ZIP file format error has occurred
- **IOException** — if an I/O error has occurred
- **SecurityException** — if any of the jar file entries are incorrectly signed.
- **IllegalStateException** — may be thrown if the jar file has been closed
