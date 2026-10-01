---
id: "java-en-function-classfilebuilder-with"
language: "java"
lang: "en"
category: "function"
name: "ClassFileBuilder.with"
signature: "B with(E e)"
title: "ClassFileBuilder.with"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileBuilder.with

```java
B with(E e)
```

Integrates the member element into the structure being built.

**参数**

- **e** — the member element

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the member element cannot be represented in the `class` file format
