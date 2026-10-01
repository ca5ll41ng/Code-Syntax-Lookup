---
id: "java-en-function-filteroutputstream-close"
language: "java"
lang: "en"
category: "function"
name: "FilterOutputStream.close"
signature: "public void close() throws IOException"
title: "FilterOutputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterOutputStream.close

```java
public void close() throws IOException
```

Closes this output stream and releases any system resources
 associated with the stream.
 When not already closed, the `close` method of `FilterOutputStream` calls its `flush` method, and then
 calls the `close` method of its underlying output stream.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#flush()
- java.io.FilterOutputStream#out
