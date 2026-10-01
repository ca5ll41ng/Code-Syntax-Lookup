---
id: "java-en-function-zipoutputstream-setmethod"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.setMethod"
signature: "public void setMethod(int method)"
title: "ZipOutputStream.setMethod"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.setMethod

```java
public void setMethod(int method)
```

Sets the default compression method for subsequent entries. This
 default will be used whenever the compression method is not specified
 for an individual ZIP file entry, and is initially set to DEFLATED.

**参数**

- **method** — the default compression method

**异常**

- **IllegalArgumentException** — if the specified compression method is invalid
