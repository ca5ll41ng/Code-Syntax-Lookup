---
id: "java-en-function-classtransform-ofstateful"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.ofStateful"
signature: "static ClassTransform ofStateful(Supplier<ClassTransform> supplier)"
title: "ClassTransform.ofStateful"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.ofStateful

```java
static ClassTransform ofStateful(Supplier<ClassTransform> supplier)
```

Creates a stateful class transform from a `Supplier`.  The supplier
 will be invoked for each transformation.

**参数**

- **supplier** — a `Supplier` that produces a fresh transform object for each traversal

**返回**

- the stateful class transform
