---
id: "java-en-function-deflater-setinput"
language: "java"
lang: "en"
category: "function"
name: "Deflater.setInput"
signature: "public void setInput(byte[] input, int off, int len)"
title: "Deflater.setInput"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.setInput

```java
public void setInput(byte[] input, int off, int len)
```

Sets input data for compression.
 

 One of the `setInput()` methods should be called whenever
 `needsInput()` returns true indicating that more input data
 is required.

**参数**

- **input** — the input data bytes
- **off** — the start offset of the data
- **len** — the length of the data

**参见**

- Deflater#needsInput
