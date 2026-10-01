---
id: "java-en-function-codetransform-ofstateful"
language: "java"
lang: "en"
category: "function"
name: "CodeTransform.ofStateful"
signature: "static CodeTransform ofStateful(Supplier<CodeTransform> supplier)"
title: "CodeTransform.ofStateful"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeTransform.ofStateful

```java
static CodeTransform ofStateful(Supplier<CodeTransform> supplier)
```

Creates a stateful code transform from a `Supplier`.  The supplier
 will be invoked for each transformation.

**参数**

- **supplier** — a `Supplier` that produces a fresh transform object for each traversal

**返回**

- the stateful code transform
