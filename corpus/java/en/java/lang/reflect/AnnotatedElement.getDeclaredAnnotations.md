---
id: "java-en-function-annotatedelement-getdeclaredannotations"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.getDeclaredAnnotations"
signature: "Annotation[] getDeclaredAnnotations()"
title: "AnnotatedElement.getDeclaredAnnotations"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.getDeclaredAnnotations

```java
Annotation[] getDeclaredAnnotations()
```

Returns annotations that are directly present on this element.
 This method ignores inherited annotations.

 If there are no annotations directly present on this element,
 the return value is an array of length 0.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.

**返回**

- annotations directly present on this element
