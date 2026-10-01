---
id: "java-en-function-deflateroutputstream-finish"
language: "java"
lang: "en"
category: "function"
name: "DeflaterOutputStream.finish"
signature: "public void finish() throws IOException"
title: "DeflaterOutputStream.finish"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterOutputStream.finish

```java
public void finish() throws IOException
```

Finishes writing compressed data to the output stream without closing
 the underlying stream. Use this method when applying multiple filters
 in succession to the same output stream.

**异常**

- **IOException** — if an I/O error has occurred
