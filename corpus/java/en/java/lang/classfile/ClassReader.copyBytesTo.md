---
id: "java-en-function-classreader-copybytesto"
language: "java"
lang: "en"
category: "function"
name: "ClassReader.copyBytesTo"
signature: "void copyBytesTo(BufWriter buf, int offset, int len)"
title: "ClassReader.copyBytesTo"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader.copyBytesTo

```java
void copyBytesTo(BufWriter buf, int offset, int len)
```

Copy a range of bytes from the `class` file to a `BufWriter`.

**参数**

- **buf** — the `BufWriter`
- **offset** — the offset within the `class` file
- **len** — the length of the range
