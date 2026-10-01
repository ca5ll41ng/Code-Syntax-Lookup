---
id: "java-en-function-annotatedelement-getannotation"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.getAnnotation"
signature: "<T extends Annotation> T getAnnotation(Class<T> annotationClass)"
title: "AnnotatedElement.getAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.getAnnotation

```java
<T extends Annotation> T getAnnotation(Class<T> annotationClass)
```

Returns this element's annotation for the specified type if
 such an annotation is present, else null.

**参数**

- **the** — type of the annotation to query for and return if present
- **annotationClass** — the Class object corresponding to the annotation type

**返回**

- this element's annotation for the specified annotation type if present on this element, else null

**异常**

- **NullPointerException** — if the given annotation class is null
