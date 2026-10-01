---
id: "java-en-function-inflateroutputstream-finish"
language: "java"
lang: "en"
category: "function"
name: "InflaterOutputStream.finish"
signature: "public void finish() throws IOException"
title: "InflaterOutputStream.finish"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterOutputStream.finish

```java
public void finish() throws IOException
```

Writes any pending buffered decompressed data to the underlying output stream,
 without closing the underlying stream.

 decompressed data.
 

 If this `InflaterOutputStream` was created without specifying
 a `Inflater decompressor`, then this method closes the decompressor
 that was created at construction time. The `InflaterOutputStream` cannot
 then be used for any further writes.

**异常**

- **IOException** — if an I/O error occurs or this stream is already closed
