---
id: "java-en-function-classreader-readdouble"
language: "java"
lang: "en"
category: "function"
name: "ClassReader.readDouble"
signature: "double readDouble(int offset)"
title: "ClassReader.readDouble"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader.readDouble

```java
double readDouble(int offset)
```

{@return the double value at the specified offset within the `class` file}  Reads 8 bytes of value.
 

 In the conversions, all NaN values of the `double` may or may not
 be collapsed into a single `NaN "canonical" NaN value`.

**参数**

- **offset** — the offset within the `class` file
