---
id: "java-en-function-inflater-gettotalin"
language: "java"
lang: "en"
category: "function"
name: "Inflater.getTotalIn"
signature: "public int getTotalIn()"
title: "Inflater.getTotalIn"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.getTotalIn

```java
public int getTotalIn()
```

Returns the total number of compressed bytes input so far.

 This method returns the equivalent of `(int) getBytesRead()`
 and therefore cannot return the correct value when it is greater
 than `MAX_VALUE`.

**返回**

- the total number of compressed bytes input so far

**异常**

- **IllegalStateException** — if the Inflater is closed

> **⚠ Deprecated** — Use `getBytesRead` instead
