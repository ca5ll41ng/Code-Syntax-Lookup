---
id: "java-en-function-deflateroutputstream-deflateroutputstream"
language: "java"
lang: "en"
category: "function"
name: "DeflaterOutputStream.DeflaterOutputStream"
signature: "public DeflaterOutputStream(OutputStream out, Deflater def, int size, boolean syncFlush)"
title: "DeflaterOutputStream.DeflaterOutputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterOutputStream.DeflaterOutputStream

```java
public DeflaterOutputStream(OutputStream out, Deflater def, int size, boolean syncFlush)
```

Creates a new output stream with the specified compressor,
 buffer size and flush mode.
 

 `close() Closing` this output stream
 `#compressor-usage will not close` the given
 `Deflater compressor`.

**参数**

- **out** — the output stream
- **def** — the compressor ("deflater")
- **size** — the output buffer size
- **syncFlush** — if `true` the `flush` method of this instance flushes the compressor with flush mode `SYNC_FLUSH` before flushing the output stream, otherwise only flushes the output stream

**异常**

- **IllegalArgumentException** — if `size <= 0`

> *Since 1.7*
