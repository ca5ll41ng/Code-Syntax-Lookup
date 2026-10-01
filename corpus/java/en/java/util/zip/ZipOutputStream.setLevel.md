---
id: "java-en-function-zipoutputstream-setlevel"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.setLevel"
signature: "public void setLevel(int level)"
title: "ZipOutputStream.setLevel"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.setLevel

```java
public void setLevel(int level)
```

Sets the compression level for subsequent entries which are DEFLATED.
 The default setting is DEFAULT_COMPRESSION.

**参数**

- **level** — the compression level (0-9)

**异常**

- **IllegalArgumentException** — if the compression level is invalid
