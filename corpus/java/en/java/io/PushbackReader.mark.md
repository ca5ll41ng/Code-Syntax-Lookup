---
id: "java-en-function-pushbackreader-mark"
language: "java"
lang: "en"
category: "function"
name: "PushbackReader.mark"
signature: "public void mark(int readAheadLimit) throws IOException"
title: "PushbackReader.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackReader.mark

```java
public void mark(int readAheadLimit) throws IOException
```

Marks the present position in the stream. The `mark`
 for class `PushbackReader` always throws an exception.

**异常**

- **IOException** — Always, since mark is not supported
