---
id: "java-en-function-deflaterinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "DeflaterInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "DeflaterInputStream.skip"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards data from the input stream.
 This method may block until the specified number of bytes are skipped
 or end of stream is reached.

 This method skips at most `Integer.MAX_VALUE` bytes.

**参数**

- **n** — number of bytes to be skipped. If `n` is zero then no bytes are skipped.

**返回**

- the actual number of bytes skipped, which might be zero

**异常**

- **IOException** — if an I/O error occurs or if this stream is already closed
- **IllegalArgumentException** — if `n < 0`
