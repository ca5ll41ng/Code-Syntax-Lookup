---
id: "java-en-function-annotation-annotationtype"
language: "java"
lang: "en"
category: "function"
name: "Annotation.annotationType"
signature: "Class<? extends Annotation> annotationType()"
title: "Annotation.annotationType"
directive: "method"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/Annotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Annotation.annotationType

```java
Class<? extends Annotation> annotationType()
```

Returns the annotation interface of this annotation.

 the implementations of annotations. Therefore, calling `getClass getClass` on an annotation will return an
 implementation-dependent class. In contrast, this method will
 reliably return the annotation interface of the annotation.

**返回**

- the annotation interface of this annotation

**参见**

- Enum#getDeclaringClass
