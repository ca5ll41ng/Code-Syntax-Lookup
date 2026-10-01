---
id: "java-en-function-annotatedelement-getannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.getAnnotationsByType"
signature: "default <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)"
title: "AnnotatedElement.getAnnotationsByType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.getAnnotationsByType

```java
default <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)
```

Returns annotations that are associated with this element.

 If there are no annotations associated with this element, the return
 value is an array of length 0.

 The difference between this method and `getAnnotation`
 is that this method detects if its argument is a repeatable
 annotation type (JLS {@jls 9.6}), and if so, attempts to find one or
 more annotations of that type by "looking through" a container
 annotation.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.

 length greater than zero, the array is returned. If the returned
 array is zero-length and this `AnnotatedElement` is a
 class and the argument type is an inheritable annotation type,
 and the superclass of this `AnnotatedElement` is non-null,
 then the returned result is the result of calling `getAnnotationsByType` on the superclass with `annotationClass` as the argument. Otherwise, a zero-length
 array is returned.

**参数**

- **the** — type of the annotation to query for and return if present
- **annotationClass** — the Class object corresponding to the annotation type

**返回**

- all this element's annotations for the specified annotation type if associated with this element, else an array of length zero

**异常**

- **NullPointerException** — if the given annotation class is null

> *Since 1.8*
