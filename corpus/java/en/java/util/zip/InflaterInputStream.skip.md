---
id: "java-en-function-inflaterinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "InflaterInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "InflaterInputStream.skip"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips specified number of bytes of uncompressed data.
 This method may block until the specified number of bytes are skipped
 or end of stream is reached.

 This method skips at most `Integer.MAX_VALUE` bytes.

**参数**

- **n** — the number of bytes to skip. If `n` is zero then no bytes are skipped.

**返回**

- the actual number of bytes skipped, which might be zero

**异常**

- **IOException** — if an I/O error occurs or if this stream is already closed
- **IllegalArgumentException** — if `n < 0`
