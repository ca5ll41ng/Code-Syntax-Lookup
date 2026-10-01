---
id: "java-en-function-zipentry-setmethod"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setMethod"
signature: "public void setMethod(int method)"
title: "ZipEntry.setMethod"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setMethod

```java
public void setMethod(int method)
```

Sets the compression method for the entry.

**参数**

- **method** — the compression method, either STORED or DEFLATED

**异常**

- **IllegalArgumentException** — if the specified compression method is invalid

**参见**

- #getMethod()
