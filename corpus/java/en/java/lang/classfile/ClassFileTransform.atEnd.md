---
id: "java-en-function-classfiletransform-atend"
language: "java"
lang: "en"
category: "function"
name: "ClassFileTransform.atEnd"
signature: "default void atEnd(B builder)"
title: "ClassFileTransform.atEnd"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransform.atEnd

```java
default void atEnd(B builder)
```

Take any final action during transformation of a classfile entity.  Called
 after all elements of the class are presented to `accept`.
 

 This method is called by the Class-File API.  Users should never call
 this method.

**参数**

- **builder** — the builder for the new entity
