---
id: "java-en-function-deflaterinputstream-deflaterinputstream"
language: "java"
lang: "en"
category: "function"
name: "DeflaterInputStream.DeflaterInputStream"
signature: "public DeflaterInputStream(InputStream in)"
title: "DeflaterInputStream.DeflaterInputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterInputStream.DeflaterInputStream

```java
public DeflaterInputStream(InputStream in)
```

Creates a new input stream and compressor with the
 default compression level and a default buffer size.
 

 The compressor will be closed when this input stream
 is `close() closed`.

**参数**

- **in** — input stream to read the uncompressed data to

**异常**

- **NullPointerException** — if `in` is null
