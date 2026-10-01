---
id: "java-en-function-codetransform-andthen"
language: "java"
lang: "en"
category: "function"
name: "CodeTransform.andThen"
signature: "default CodeTransform andThen(CodeTransform t)"
title: "CodeTransform.andThen"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeTransform.andThen

```java
default CodeTransform andThen(CodeTransform t)
```

The default implementation returns this code transform chained with another
 code transform from the argument. Chaining of two transforms requires to
 involve a chained builder serving as a target builder for this transform
 and also as a source of elements for the downstream transform.
