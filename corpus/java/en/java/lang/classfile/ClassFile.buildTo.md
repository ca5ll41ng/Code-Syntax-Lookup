---
id: "java-en-function-classfile-buildto"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.buildTo"
signature: "default void buildTo(Path path, ClassDesc thisClass, Consumer<ClassBuilder> handler) throws IOException"
title: "ClassFile.buildTo"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.buildTo

```java
default void buildTo(Path path, ClassDesc thisClass, Consumer<ClassBuilder> handler) throws IOException
```

Builds a `class` file into a file in a file system.

**参数**

- **path** — the path to the file to write
- **thisClass** — the name of the class to build
- **handler** — a handler that receives a `ClassBuilder`

**异常**

- **IOException** — if an I/O error occurs
- **IllegalArgumentException** — if building encounters a failure
