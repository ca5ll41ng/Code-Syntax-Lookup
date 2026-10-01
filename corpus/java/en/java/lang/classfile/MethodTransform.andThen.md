---
id: "java-en-function-methodtransform-andthen"
language: "java"
lang: "en"
category: "function"
name: "MethodTransform.andThen"
signature: "default MethodTransform andThen(MethodTransform t)"
title: "MethodTransform.andThen"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTransform.andThen

```java
default MethodTransform andThen(MethodTransform t)
```

The default implementation returns this method transform chained with another
 method transform from the argument. Chaining of two transforms requires to
 involve a chained builder serving as a target builder for this transform
 and also as a source of elements for the downstream transform.
