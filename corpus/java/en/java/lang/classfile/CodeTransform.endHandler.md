---
id: "java-en-function-codetransform-endhandler"
language: "java"
lang: "en"
category: "function"
name: "CodeTransform.endHandler"
signature: "static CodeTransform endHandler(Consumer<CodeBuilder> finisher)"
title: "CodeTransform.endHandler"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeTransform.endHandler

```java
static CodeTransform endHandler(Consumer<CodeBuilder> finisher)
```

Creates a code transform that passes each element through to the builder,
 and calls the specified function when transformation is complete.

**参数**

- **finisher** — the function to call when transformation is complete

**返回**

- the code transform
