---
id: "java-en-function-inputstreamreader-ready"
language: "java"
lang: "en"
category: "function"
name: "InputStreamReader.ready"
signature: "public boolean ready() throws IOException"
title: "InputStreamReader.ready"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStreamReader.ready

```java
public boolean ready() throws IOException
```

Tells whether this stream is ready to be read.  An InputStreamReader is
 ready if its input buffer is not empty, or if bytes are available to be
 read from the underlying byte stream.

**异常**

- **IOException** — If an I/O error occurs
