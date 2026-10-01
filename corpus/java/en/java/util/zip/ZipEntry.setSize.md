---
id: "java-en-function-zipentry-setsize"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setSize"
signature: "public void setSize(long size)"
title: "ZipEntry.setSize"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setSize

```java
public void setSize(long size)
```

Sets the uncompressed size of the entry data.

**参数**

- **size** — the uncompressed size in bytes

**异常**

- **IllegalArgumentException** — if the specified size is less than 0, is greater than 0xFFFFFFFF when ZIP64 format is not supported, or is less than 0 when ZIP64 is supported

**参见**

- #getSize()
