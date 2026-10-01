---
id: "java-en-function-filteroutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "FilterOutputStream.flush"
signature: "public void flush() throws IOException"
title: "FilterOutputStream.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterOutputStream.flush

```java
public void flush() throws IOException
```

Flushes this output stream and forces any buffered output bytes
 to be written out to the stream.
 The `flush` method of `FilterOutputStream`
 calls the `flush` method of its underlying output stream.

**异常**

- **IOException** — {@inheritDoc}

**参见**

- java.io.FilterOutputStream#out
