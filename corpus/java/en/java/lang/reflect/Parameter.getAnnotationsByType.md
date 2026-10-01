---
id: "java-en-function-parameter-getannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "Parameter.getAnnotationsByType"
signature: "public <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)"
title: "Parameter.getAnnotationsByType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Parameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parameter.getAnnotationsByType

```java
public <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)
```

{@inheritDoc}
 

Note that any annotations returned by this method are
 declaration annotations.

**异常**

- **NullPointerException** — {@inheritDoc}
