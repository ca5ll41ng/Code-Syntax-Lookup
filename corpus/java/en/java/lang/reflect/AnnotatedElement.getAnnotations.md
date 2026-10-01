---
id: "java-en-function-annotatedelement-getannotations"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.getAnnotations"
signature: "Annotation[] getAnnotations()"
title: "AnnotatedElement.getAnnotations"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.getAnnotations

```java
Annotation[] getAnnotations()
```

Returns annotations that are present on this element.

 If there are no annotations present on this element, the return
 value is an array of length 0.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.

**返回**

- annotations present on this element
