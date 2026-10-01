---
id: "java-en-function-recordcomponent-getannotation"
language: "java"
lang: "en"
category: "function"
name: "RecordComponent.getAnnotation"
signature: "public <T extends Annotation> T getAnnotation(Class<T> annotationClass)"
title: "RecordComponent.getAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/RecordComponent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecordComponent.getAnnotation

```java
public <T extends Annotation> T getAnnotation(Class<T> annotationClass)
```

{@inheritDoc}
 

Note that any annotation returned by this method is a
 declaration annotation.

**异常**

- **NullPointerException** — {@inheritDoc}
