---
id: "java-en-function-zipfile-zipfile"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.ZipFile"
signature: "public ZipFile(String name) throws IOException"
title: "ZipFile.ZipFile"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.ZipFile

```java
public ZipFile(String name) throws IOException
```

Opens a ZIP file for reading.

 

The UTF-8 `java.nio.charset.Charset charset` is used to
 decode the entry names and comments.

**参数**

- **name** — the name of the ZIP file

**异常**

- **ZipException** — if a ZIP format error has occurred
- **IOException** — if an I/O error has occurred
