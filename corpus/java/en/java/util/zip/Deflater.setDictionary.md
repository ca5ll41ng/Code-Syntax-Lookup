---
id: "java-en-function-deflater-setdictionary"
language: "java"
lang: "en"
category: "function"
name: "Deflater.setDictionary"
signature: "public void setDictionary(byte[] dictionary, int off, int len)"
title: "Deflater.setDictionary"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.setDictionary

```java
public void setDictionary(byte[] dictionary, int off, int len)
```

Sets preset dictionary for compression. A preset dictionary is used
 when the history buffer can be predetermined. When the data is later
 uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
 in order to get the Adler-32 value of the dictionary required for
 decompression.

**参数**

- **dictionary** — the dictionary data bytes
- **off** — the start offset of the data
- **len** — the length of the data

**异常**

- **IllegalStateException** — if the Deflater is closed

**参见**

- Inflater#inflate
- Inflater#getAdler()
