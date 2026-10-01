---
id: "java-en-function-methodtransform-ofstateful"
language: "java"
lang: "en"
category: "function"
name: "MethodTransform.ofStateful"
signature: "static MethodTransform ofStateful(Supplier<MethodTransform> supplier)"
title: "MethodTransform.ofStateful"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTransform.ofStateful

```java
static MethodTransform ofStateful(Supplier<MethodTransform> supplier)
```

Creates a stateful method transform from a `Supplier`.  The supplier
 will be invoked for each transformation.

**参数**

- **supplier** — a `Supplier` that produces a fresh transform object for each traversal

**返回**

- the stateful method transform
