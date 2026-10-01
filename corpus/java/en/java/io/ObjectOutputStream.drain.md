---
id: "java-en-function-objectoutputstream-drain"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.drain"
signature: "protected void drain() throws IOException"
title: "ObjectOutputStream.drain"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.drain

```java
protected void drain() throws IOException
```

Drain any buffered data in ObjectOutputStream.  Similar to flush but
 does not propagate the flush to the underlying stream.

**异常**

- **IOException** — if I/O errors occur while writing to the underlying stream
