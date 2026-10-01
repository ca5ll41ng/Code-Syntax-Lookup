---
id: "java-en-function-annotatedelement-getdeclaredannotation"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.getDeclaredAnnotation"
signature: "default <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)"
title: "AnnotatedElement.getDeclaredAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.getDeclaredAnnotation

```java
default <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)
```

Returns this element's annotation for the specified type if
 such an annotation is directly present, else null.

 This method ignores inherited annotations. (Returns null if no
 annotations are directly present on this element.)

 and then loops over the results of `getDeclaredAnnotations` returning the first annotation whose
 annotation type matches the argument type.

**参数**

- **the** — type of the annotation to query for and return if directly present
- **annotationClass** — the Class object corresponding to the annotation type

**返回**

- this element's annotation for the specified annotation type if directly present on this element, else null

**异常**

- **NullPointerException** — if the given annotation class is null

> *Since 1.8*
