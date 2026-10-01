---
id: "java-en-function-methodtransform-endhandler"
language: "java"
lang: "en"
category: "function"
name: "MethodTransform.endHandler"
signature: "static MethodTransform endHandler(Consumer<MethodBuilder> finisher)"
title: "MethodTransform.endHandler"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTransform.endHandler

```java
static MethodTransform endHandler(Consumer<MethodBuilder> finisher)
```

Creates a method transform that passes each element through to the builder,
 and calls the specified function when transformation is complete.

**参数**

- **finisher** — the function to call when transformation is complete

**返回**

- the method transform
