---
id: "java-en-function-parameter-getdeclaredannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "Parameter.getDeclaredAnnotationsByType"
signature: "public <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)"
title: "Parameter.getDeclaredAnnotationsByType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Parameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parameter.getDeclaredAnnotationsByType

```java
public <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)
```

{@inheritDoc}
 

Note that any annotations returned by this method are
 declaration annotations.

**异常**

- **NullPointerException** — {@inheritDoc}
