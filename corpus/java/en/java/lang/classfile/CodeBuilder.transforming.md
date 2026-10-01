---
id: "java-en-function-codebuilder-transforming"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.transforming"
signature: "default CodeBuilder transforming(CodeTransform transform, Consumer<CodeBuilder> handler)"
title: "CodeBuilder.transforming"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.transforming

```java
default CodeBuilder transforming(CodeTransform transform, Consumer<CodeBuilder> handler)
```

Apply a transform to the code built by a handler, directing results to
 this builder.

 This is similar to `transform`, but this does not require the
 code elements to be viewed as a `CodeModel` first.

**参数**

- **transform** — the transform to apply to the code built by the handler
- **handler** — the handler that receives a `CodeBuilder` to build the code

**返回**

- this builder
