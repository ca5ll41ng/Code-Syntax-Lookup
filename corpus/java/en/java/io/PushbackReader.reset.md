---
id: "java-en-function-pushbackreader-reset"
language: "java"
lang: "en"
category: "function"
name: "PushbackReader.reset"
signature: "public void reset() throws IOException"
title: "PushbackReader.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackReader.reset

```java
public void reset() throws IOException
```

Resets the stream. The `reset` method of
 `PushbackReader` always throws an exception.

**异常**

- **IOException** — Always, since reset is not supported
