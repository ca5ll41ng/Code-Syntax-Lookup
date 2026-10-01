---
id: "java-en-function-fieldtransform-ofstateful"
language: "java"
lang: "en"
category: "function"
name: "FieldTransform.ofStateful"
signature: "static FieldTransform ofStateful(Supplier<FieldTransform> supplier)"
title: "FieldTransform.ofStateful"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldTransform.ofStateful

```java
static FieldTransform ofStateful(Supplier<FieldTransform> supplier)
```

Creates a stateful field transform from a `Supplier`.  The supplier
 will be invoked for each transformation.

**参数**

- **supplier** — a `Supplier` that produces a fresh transform object for each traversal

**返回**

- the stateful field transform
