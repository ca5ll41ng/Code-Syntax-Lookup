---
id: "java-en-function-classfilebuilder-accept"
language: "java"
lang: "en"
category: "function"
name: "ClassFileBuilder.accept"
signature: "default void accept(E e)"
title: "ClassFileBuilder.accept"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileBuilder.accept

```java
default void accept(E e)
```

Integrates the member element into the structure being built.

 This method exists to implement `Consumer`; users can use `with` for call chaining.

**参数**

- **e** — the member element

**异常**

- **IllegalArgumentException** — if the member element cannot be represented in the `class` file format
