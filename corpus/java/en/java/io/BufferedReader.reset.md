---
id: "java-en-function-bufferedreader-reset"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.reset"
signature: "public void reset() throws IOException"
title: "BufferedReader.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.reset

```java
public void reset() throws IOException
```

Resets the stream to the most recent mark.

**异常**

- **IOException** — If the stream has never been marked, or if the mark has been invalidated
