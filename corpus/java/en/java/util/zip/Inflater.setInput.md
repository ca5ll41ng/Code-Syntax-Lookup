---
id: "java-en-function-inflater-setinput"
language: "java"
lang: "en"
category: "function"
name: "Inflater.setInput"
signature: "public void setInput(byte[] input, int off, int len)"
title: "Inflater.setInput"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.setInput

```java
public void setInput(byte[] input, int off, int len)
```

Sets input data for decompression.
 

 One of the `setInput()` methods should be called whenever
 `needsInput()` returns true indicating that more input data
 is required.

**参数**

- **input** — the input data bytes
- **off** — the start offset of the input data
- **len** — the length of the input data

**参见**

- Inflater#needsInput
