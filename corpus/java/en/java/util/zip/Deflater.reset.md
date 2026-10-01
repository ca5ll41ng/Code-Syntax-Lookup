---
id: "java-en-function-deflater-reset"
language: "java"
lang: "en"
category: "function"
name: "Deflater.reset"
signature: "public void reset()"
title: "Deflater.reset"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.reset

```java
public void reset()
```

Resets deflater so that a new set of input data can be processed.
 Keeps current compression level and strategy settings.

**异常**

- **IllegalStateException** — if the Deflater is closed
