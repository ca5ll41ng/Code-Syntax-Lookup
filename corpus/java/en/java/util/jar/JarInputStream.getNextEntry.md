---
id: "java-en-function-jarinputstream-getnextentry"
language: "java"
lang: "en"
category: "function"
name: "JarInputStream.getNextEntry"
signature: "public ZipEntry getNextEntry() throws IOException"
title: "JarInputStream.getNextEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarInputStream.getNextEntry

```java
public ZipEntry getNextEntry() throws IOException
```

Reads the next ZIP file entry and positions the stream at the
 beginning of the entry data. If verification has been enabled,
 any invalid signature detected while positioning the stream for
 the next entry will result in an exception.

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
- **SecurityException** — if any of the jar file entries are incorrectly signed.
