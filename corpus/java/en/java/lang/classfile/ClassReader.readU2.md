---
id: "java-en-function-classreader-readu2"
language: "java"
lang: "en"
category: "function"
name: "ClassReader.readU2"
signature: "int readU2(int offset)"
title: "ClassReader.readU2"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader.readU2

```java
int readU2(int offset)
```

{@return the `#u2 u2` at the specified offset
 within the `class` file}  Reads a 2-byte value and zero-extends it
 to an `int`.

**参数**

- **offset** — the offset within the `class` file
