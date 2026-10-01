---
id: "java-en-function-jaroutputstream-putnextentry"
language: "java"
lang: "en"
category: "function"
name: "JarOutputStream.putNextEntry"
signature: "public void putNextEntry(ZipEntry ze) throws IOException"
title: "JarOutputStream.putNextEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarOutputStream.putNextEntry

```java
public void putNextEntry(ZipEntry ze) throws IOException
```

Begins writing a new JAR file entry and positions the stream
 to the start of the entry data. This method will also close
 any previous entry.
 

 The default compression method will be used if no compression
 method was specified for the entry. When writing a compressed
 (DEFLATED) entry, and the compressed size has not been explicitly
 set with the `setCompressedSize` method,
 then the compressed size will be set to the actual compressed
 size after deflation.
 

 The current time will be used if the entry has no set modification
 time.

**参数**

- **ze** — the ZIP/JAR entry to be written

**异常**

- **ZipException** — if a ZIP error has occurred
- **IOException** — if an I/O error has occurred
