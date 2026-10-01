---
id: "java-en-function-annotatedtype-getannotation"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedType.getAnnotation"
signature: "<T extends Annotation> T getAnnotation(Class<T> annotationClass)"
title: "AnnotatedType.getAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedType.getAnnotation

```java
<T extends Annotation> T getAnnotation(Class<T> annotationClass)
```

{@inheritDoc}
 

Note that any annotation returned by this method is a type
 annotation.

**异常**

- **NullPointerException** — {@inheritDoc}
