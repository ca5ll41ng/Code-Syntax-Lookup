---
id: "java-en-function-zipinputstream-getnextentry"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.getNextEntry"
signature: "public ZipEntry getNextEntry() throws IOException"
title: "ZipInputStream.getNextEntry"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.getNextEntry

```java
public ZipEntry getNextEntry() throws IOException
```

Reads the next ZIP file entry and positions the stream at the
 beginning of the entry data.

**返回**

- the next ZIP file entry, or null if there are no more entries

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
