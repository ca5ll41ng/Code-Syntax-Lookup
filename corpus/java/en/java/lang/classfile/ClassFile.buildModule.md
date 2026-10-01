---
id: "java-en-function-classfile-buildmodule"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.buildModule"
signature: "default byte[] buildModule(ModuleAttribute moduleAttribute)"
title: "ClassFile.buildModule"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.buildModule

```java
default byte[] buildModule(ModuleAttribute moduleAttribute)
```

Builds a module descriptor into a byte array.

**参数**

- **moduleAttribute** — the `Module` attribute

**返回**

- the `class` file bytes

**异常**

- **IllegalArgumentException** — if building encounters a failure
