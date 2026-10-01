---
id: "java-en-function-objectoutputstream-writestreamheader"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeStreamHeader"
signature: "protected void writeStreamHeader() throws IOException"
title: "ObjectOutputStream.writeStreamHeader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeStreamHeader

```java
protected void writeStreamHeader() throws IOException
```

The writeStreamHeader method is provided so subclasses can append or
 prepend their own header to the stream.  It writes the magic number and
 version to the stream.

**异常**

- **IOException** — if I/O errors occur while writing to the underlying stream
