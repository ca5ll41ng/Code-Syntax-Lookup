---
id: "java-en-function-zipoutputstream-finish"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.finish"
signature: "public void finish() throws IOException"
title: "ZipOutputStream.finish"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.finish

```java
public void finish() throws IOException
```

Finishes writing the contents of the ZIP output stream without closing
 the underlying stream. Use this method when applying multiple filters
 in succession to the same output stream.
 

 A ZipException will be thrown if the combined length, after encoding,
 of the entry name, the extra field data, the entry comment and
 `CENHDR CEN Header size`, exceeds 65,535 bytes.

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O exception has occurred
