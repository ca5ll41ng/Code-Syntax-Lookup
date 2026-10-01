---
id: "java-en-function-inflateroutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "InflaterOutputStream.flush"
signature: "public void flush() throws IOException"
title: "InflaterOutputStream.flush"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterOutputStream.flush

```java
public void flush() throws IOException
```

Flushes this output stream, writing any pending buffered decompressed data to
 the underlying output stream.

**异常**

- **IOException** — if an I/O error occurs or this stream is already closed
