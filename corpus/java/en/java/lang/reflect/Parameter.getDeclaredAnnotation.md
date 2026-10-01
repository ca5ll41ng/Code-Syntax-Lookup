---
id: "java-en-function-parameter-getdeclaredannotation"
language: "java"
lang: "en"
category: "function"
name: "Parameter.getDeclaredAnnotation"
signature: "public <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)"
title: "Parameter.getDeclaredAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Parameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parameter.getDeclaredAnnotation

```java
public <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)
```

{@inheritDoc}
 

Note that any annotation returned by this method is a
 declaration annotation.

**异常**

- **NullPointerException** — {@inheritDoc}
