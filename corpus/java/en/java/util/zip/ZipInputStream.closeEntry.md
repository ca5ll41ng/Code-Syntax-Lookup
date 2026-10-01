---
id: "java-en-function-zipinputstream-closeentry"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.closeEntry"
signature: "public void closeEntry() throws IOException"
title: "ZipInputStream.closeEntry"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.closeEntry

```java
public void closeEntry() throws IOException
```

Closes the current ZIP entry and positions the stream for reading the
 next entry.

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
