---
id: "java-en-function-classtransform-endhandler"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.endHandler"
signature: "static ClassTransform endHandler(Consumer<ClassBuilder> finisher)"
title: "ClassTransform.endHandler"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.endHandler

```java
static ClassTransform endHandler(Consumer<ClassBuilder> finisher)
```

Creates a class transform that passes each element through to the builder,
 and calls the specified function when transformation is complete.

**参数**

- **finisher** — the function to call when transformation is complete

**返回**

- the class transform
