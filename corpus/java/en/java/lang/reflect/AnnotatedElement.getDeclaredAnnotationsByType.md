---
id: "java-en-function-annotatedelement-getdeclaredannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedElement.getDeclaredAnnotationsByType"
signature: "default <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)"
title: "AnnotatedElement.getDeclaredAnnotationsByType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement.getDeclaredAnnotationsByType

```java
default <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)
```

Returns this element's annotation(s) for the specified type if
 such annotations are either directly present or
 indirectly present. This method ignores inherited
 annotations.

 If there are no specified annotations directly or indirectly
 present on this element, the return value is an array of length
 0.

 The difference between this method and `getDeclaredAnnotation` is that this method detects if its
 argument is a repeatable annotation type (JLS {@jls 9.6}), and if so,
 attempts to find one or more annotations of that type by "looking
 through" a container annotation if one is present.

 The caller of this method is free to modify the returned array; it will
 have no effect on the arrays returned to other callers.

 directly present annotation and, if the annotation type is
 repeatable, to find a container annotation. If annotations of
 the annotation type `annotationClass` are found to be both
 directly and indirectly present, then `getDeclaredAnnotations` will get called to determine the
 order of the elements in the returned array.

 

Alternatively, the default implementation may call `getDeclaredAnnotations` a single time and the returned array
 examined for both directly and indirectly present
 annotations. The results of calling `getDeclaredAnnotations` are assumed to be consistent with the
 results of calling `getDeclaredAnnotation`.

**参数**

- **the** — type of the annotation to query for and return if directly or indirectly present
- **annotationClass** — the Class object corresponding to the annotation type

**返回**

- all this element's annotations for the specified annotation type if directly or indirectly present on this element, else an array of length zero

**异常**

- **NullPointerException** — if the given annotation class is null

> *Since 1.8*
