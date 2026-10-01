---
id: "java-en-function-annotatedelement-isannotationpresent"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.isAnnotationPresent"
signature: "default boolean isAnnotationPresent(Class<? extends Annotation> annotationClass)"
title: "AnnotatedElement.isAnnotationPresent"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.isAnnotationPresent

```java
default boolean isAnnotationPresent(Class<? extends Annotation> annotationClass)
```

Returns true if an annotation for the specified type
 is present on this element, else false.  This method
 is designed primarily for convenient access to marker annotations.

 

The truth value returned by this method is equivalent to:
 `getAnnotation(annotationClass) != null`

**参数**

- **annotationClass** — the Class object corresponding to the annotation type

**返回**

- true if an annotation for the specified annotation type is present on this element, else false

**异常**

- **NullPointerException** — if the given annotation class is null
