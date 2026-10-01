---
id: "java-en-function-bufferedreader-bufferedreader"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.BufferedReader"
signature: "public BufferedReader(Reader in, int sz)"
title: "BufferedReader.BufferedReader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.BufferedReader

```java
public BufferedReader(Reader in, int sz)
```

Creates a buffering character-input stream that uses an input buffer of
 the specified size.

**参数**

- **in** — A Reader
- **sz** — Input-buffer size

**异常**

- **IllegalArgumentException** — If `sz <= 0`
