---
id: "java-en-function-inflater-setdictionary"
language: "java"
lang: "en"
category: "function"
name: "Inflater.setDictionary"
signature: "public void setDictionary(byte[] dictionary, int off, int len)"
title: "Inflater.setDictionary"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.setDictionary

```java
public void setDictionary(byte[] dictionary, int off, int len)
```

Sets the preset dictionary to the given array of bytes. Should be
 called when inflate() returns 0 and needsDictionary() returns true
 indicating that a preset dictionary is required. The method getAdler()
 can be used to get the Adler-32 value of the dictionary needed.

**参数**

- **dictionary** — the dictionary data bytes
- **off** — the start offset of the data
- **len** — the length of the data

**异常**

- **IllegalStateException** — if the Inflater is closed

**参见**

- Inflater#needsDictionary
- Inflater#getAdler
