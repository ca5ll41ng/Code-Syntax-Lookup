---
id: "java-en-function-deflater-gettotalin"
language: "java"
lang: "en"
category: "function"
name: "Deflater.getTotalIn"
signature: "public int getTotalIn()"
title: "Deflater.getTotalIn"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.getTotalIn

```java
public int getTotalIn()
```

Returns the total number of uncompressed bytes input so far.

 This method returns the equivalent of `(int) getBytesRead()`
 and therefore cannot return the correct value when it is greater
 than `MAX_VALUE`.

**返回**

- the total number of uncompressed bytes input so far

**异常**

- **IllegalStateException** — if the Deflater is closed

> **⚠ Deprecated** — Use `getBytesRead` instead
