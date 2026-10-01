---
id: "java-en-function-fieldtransform-andthen"
language: "java"
lang: "en"
category: "function"
name: "FieldTransform.andThen"
signature: "default FieldTransform andThen(FieldTransform t)"
title: "FieldTransform.andThen"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldTransform.andThen

```java
default FieldTransform andThen(FieldTransform t)
```

The default implementation returns this field transform chained with another
 field transform from the argument. Chaining of two transforms requires to
 involve a chained builder serving as a target builder for this transform
 and also as a source of elements for the downstream transform.
