---
id: "java-en-function-zipinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "ZipInputStream.skip"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards `n` bytes of data from this input stream
 for the current ZIP entry.

**参数**

- **n** — the number of bytes to skip

**返回**

- the actual number of bytes skipped

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
- **IllegalArgumentException** — if `n < 0`
