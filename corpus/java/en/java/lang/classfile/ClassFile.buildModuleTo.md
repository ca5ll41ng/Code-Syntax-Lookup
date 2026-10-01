---
id: "java-en-function-classfile-buildmoduleto"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.buildModuleTo"
signature: "default void buildModuleTo(Path path, ModuleAttribute moduleAttribute) throws IOException"
title: "ClassFile.buildModuleTo"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.buildModuleTo

```java
default void buildModuleTo(Path path, ModuleAttribute moduleAttribute) throws IOException
```

Builds a module descriptor into a file in a file system.

**参数**

- **path** — the file to write
- **moduleAttribute** — the `Module` attribute

**异常**

- **IOException** — if an I/O error occurs
- **IllegalArgumentException** — if building encounters a failure
