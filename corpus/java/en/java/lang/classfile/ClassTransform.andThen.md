---
id: "java-en-function-classtransform-andthen"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.andThen"
signature: "default ClassTransform andThen(ClassTransform t)"
title: "ClassTransform.andThen"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.andThen

```java
default ClassTransform andThen(ClassTransform t)
```

The default implementation returns this class transform chained with another
 class transform from the argument. Chaining of two transforms requires to
 involve a chained builder serving as a target builder for this transform
 and also as a source of elements for the downstream transform.
