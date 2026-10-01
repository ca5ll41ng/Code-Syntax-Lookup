---
id: "java-en-function-classreader-readentryornull"
language: "java"
lang: "en"
category: "function"
name: "ClassReader.readEntryOrNull"
signature: "PoolEntry readEntryOrNull(int offset)"
title: "ClassReader.readEntryOrNull"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader.readEntryOrNull

```java
PoolEntry readEntryOrNull(int offset)
```

{@return the constant pool entry whose index is given at the specified
 offset within the `class` file, or `null` if the index at the
 specified offset is zero}

 If only a particular type of entry is expected, use `readEntryOrNull(
 int, Class) readEntryOrNull`.

**参数**

- **offset** — the offset of the index within the `class` file

**异常**

- **ConstantPoolException** — if the index is out of range of the constant pool size
