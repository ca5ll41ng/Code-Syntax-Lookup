---
id: "java-en-function-classfile-build"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.build"
signature: "default byte[] build(ClassDesc thisClass, Consumer<? super ClassBuilder> handler)"
title: "ClassFile.build"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.build

```java
default byte[] build(ClassDesc thisClass, Consumer<? super ClassBuilder> handler)
```

Builds a `class` file into a byte array.

**参数**

- **thisClass** — the name of the class to build
- **handler** — a handler that receives a `ClassBuilder`

**返回**

- the `class` file bytes

**异常**

- **IllegalArgumentException** — if `thisClass` represents a primitive type or building encounters a failure
