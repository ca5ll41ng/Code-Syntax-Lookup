---
id: "java-en-function-inflateroutputstream-inflateroutputstream"
language: "java"
lang: "en"
category: "function"
name: "InflaterOutputStream.InflaterOutputStream"
signature: "public InflaterOutputStream(OutputStream out)"
title: "InflaterOutputStream.InflaterOutputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterOutputStream.InflaterOutputStream

```java
public InflaterOutputStream(OutputStream out)
```

Creates a new output stream and decompressor with a
 default buffer size.
 

 The decompressor will be closed when this output stream
 is `close() closed`.

**参数**

- **out** — output stream to write the decompressed data to

**异常**

- **NullPointerException** — if `out` is null
