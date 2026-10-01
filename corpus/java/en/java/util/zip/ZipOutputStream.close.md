---
id: "java-en-function-zipoutputstream-close"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.close"
signature: "public void close() throws IOException"
title: "ZipOutputStream.close"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.close

```java
public void close() throws IOException
```

Closes the underlying stream and the stream being filtered after
 the contents of the ZIP output stream are fully written.

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
