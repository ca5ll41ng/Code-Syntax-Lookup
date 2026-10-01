---
id: "java-en-function-pushbackreader-pushbackreader"
language: "java"
lang: "en"
category: "function"
name: "PushbackReader.PushbackReader"
signature: "public PushbackReader(Reader in, int size)"
title: "PushbackReader.PushbackReader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackReader.PushbackReader

```java
public PushbackReader(Reader in, int size)
```

Creates a new pushback reader with a pushback buffer of the given size.

**参数**

- **in** — The reader from which characters will be read
- **size** — The size of the pushback buffer

**异常**

- **IllegalArgumentException** — if `size <= 0`
