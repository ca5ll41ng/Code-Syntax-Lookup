---
id: "java-en-function-classfiletransform-atstart"
language: "java"
lang: "en"
category: "function"
name: "ClassFileTransform.atStart"
signature: "default void atStart(B builder)"
title: "ClassFileTransform.atStart"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransform.atStart

```java
default void atStart(B builder)
```

Take any preliminary action during transformation of a classfile entity.
 Called before any elements of the class are presented to `accept`.
 

 This method is called by the Class-File API.  Users should never call
 this method.

**参数**

- **builder** — the builder for the new entity
