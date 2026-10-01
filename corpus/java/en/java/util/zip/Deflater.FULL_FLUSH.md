---
id: "java-en-function-deflater-full_flush"
language: "java"
lang: "en"
category: "function"
name: "Deflater.FULL_FLUSH"
signature: "public static final int FULL_FLUSH = 3"
title: "Deflater.FULL_FLUSH"
directive: "field"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.FULL_FLUSH

```java
public static final int FULL_FLUSH = 3
```

Compression flush mode used to flush out all pending output and
 reset the deflater. Using this mode too often can seriously degrade
 compression.

**参见**

- Deflater#deflate(byte[], int, int, int)

> *Since 1.7*
