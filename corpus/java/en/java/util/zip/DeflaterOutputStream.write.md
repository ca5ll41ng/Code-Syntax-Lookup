---
id: "java-en-function-deflateroutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "DeflaterOutputStream.write"
signature: "public void write(int b) throws IOException"
title: "DeflaterOutputStream.write"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterOutputStream.write

```java
public void write(int b) throws IOException
```

Writes a byte to the compressed output stream. This method will
 block until the byte can be written.

**参数**

- **b** — the byte to be written

**异常**

- **IOException** — if an I/O error has occurred
