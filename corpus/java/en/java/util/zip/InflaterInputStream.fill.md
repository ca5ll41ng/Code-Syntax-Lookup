---
id: "java-en-function-inflaterinputstream-fill"
language: "java"
lang: "en"
category: "function"
name: "InflaterInputStream.fill"
signature: "protected void fill() throws IOException"
title: "InflaterInputStream.fill"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterInputStream.fill

```java
protected void fill() throws IOException
```

Fills input buffer with more data to decompress.
 This method will read up to `buf`.length bytes into the input
 buffer, `buf`, starting at element `0`. The `len`
 field will be set to the number of bytes read.

**异常**

- **IOException** — if an I/O error has occurred
- **EOFException** — if the end of input stream has been reached unexpectedly
