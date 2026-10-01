---
id: "java-en-function-deflater-setlevel"
language: "java"
lang: "en"
category: "function"
name: "Deflater.setLevel"
signature: "public void setLevel(int level)"
title: "Deflater.setLevel"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.setLevel

```java
public void setLevel(int level)
```

Sets the compression level to the specified value.

 

 If the compression level is changed, the next invocation
 of `deflate` will compress the input available so far
 with the old level (and may be flushed); the new level will
 take effect only after that invocation.

**参数**

- **level** — the new compression level (0-9)

**异常**

- **IllegalArgumentException** — if the compression level is invalid
