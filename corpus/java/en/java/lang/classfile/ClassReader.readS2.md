---
id: "java-en-function-classreader-reads2"
language: "java"
lang: "en"
category: "function"
name: "ClassReader.readS2"
signature: "int readS2(int offset)"
title: "ClassReader.readS2"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader.readS2

```java
int readS2(int offset)
```

{@return the signed byte at the specified offset within the `class`
 file}  Reads a 2-byte value and sign-extends it to an `int`.

**参数**

- **offset** — the offset within the `class` file
