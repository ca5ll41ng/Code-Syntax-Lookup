---
id: "java-en-function-deflateroutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "DeflaterOutputStream.flush"
signature: "public void flush() throws IOException"
title: "DeflaterOutputStream.flush"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterOutputStream.flush

```java
public void flush() throws IOException
```

Flushes the compressed output stream.

 If `DeflaterOutputStream(OutputStream, Deflater, int, boolean)
 syncFlush` is `true` when this compressed output stream is
 constructed, this method first flushes the underlying `compressor`
 with the flush mode `SYNC_FLUSH` to force
 all pending data to be flushed out to the output stream and then
 flushes the output stream. Otherwise this method only flushes the
 output stream without flushing the `compressor`.

**异常**

- **IOException** — if an I/O error has occurred

> *Since 1.7*
