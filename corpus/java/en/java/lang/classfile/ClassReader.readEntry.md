---
id: "java-en-function-classreader-readentry"
language: "java"
lang: "en"
category: "function"
name: "ClassReader.readEntry"
signature: "PoolEntry readEntry(int offset)"
title: "ClassReader.readEntry"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader.readEntry

```java
PoolEntry readEntry(int offset)
```

{@return the constant pool entry whose index is given at the specified
 offset within the `class` file}

 If only a particular type of entry is expected, use `readEntry(
 int, Class) readEntry`.

**参数**

- **offset** — the offset of the index within the `class` file

**异常**

- **ConstantPoolException** — if the index is out of range of the constant pool size, or zero
