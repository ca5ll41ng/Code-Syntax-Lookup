---
id: "java-en-function-inflaterinputstream-inflaterinputstream"
language: "java"
lang: "en"
category: "function"
name: "InflaterInputStream.InflaterInputStream"
signature: "public InflaterInputStream(InputStream in, Inflater inf, int size)"
title: "InflaterInputStream.InflaterInputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterInputStream.InflaterInputStream

```java
public InflaterInputStream(InputStream in, Inflater inf, int size)
```

Creates a new input stream with the specified decompressor and
 buffer size.
 

 `close() Closing` this input stream
 `#decompressor-usage will not close` the given
 `Inflater decompressor`.

**参数**

- **in** — the input stream
- **inf** — the decompressor ("inflater")
- **size** — the input buffer size

**异常**

- **IllegalArgumentException** — if `size <= 0`
