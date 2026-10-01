---
id: "java-en-function-reader-close"
language: "java"
lang: "en"
category: "function"
name: "Reader.close"
signature: "public abstract void close() throws IOException"
title: "Reader.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.close

```java
public abstract void close() throws IOException
```

Closes the stream and releases any system resources associated with
 it.  Once the stream has been closed, further read(), ready(),
 mark(), reset(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.

**异常**

- **IOException** — If an I/O error occurs
