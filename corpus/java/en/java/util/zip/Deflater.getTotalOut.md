---
id: "java-en-function-deflater-gettotalout"
language: "java"
lang: "en"
category: "function"
name: "Deflater.getTotalOut"
signature: "public int getTotalOut()"
title: "Deflater.getTotalOut"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.getTotalOut

```java
public int getTotalOut()
```

Returns the total number of compressed bytes output so far.

 This method returns the equivalent of `(int) getBytesWritten()`
 and therefore cannot return the correct value when it is greater
 than `MAX_VALUE`.

**返回**

- the total number of compressed bytes output so far

**异常**

- **IllegalStateException** — if the Deflater is closed

> **⚠ Deprecated** — Use `getBytesWritten` instead
