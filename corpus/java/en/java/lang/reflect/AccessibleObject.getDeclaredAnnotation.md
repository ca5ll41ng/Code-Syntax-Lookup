---
id: "java-en-function-accessibleobject-getdeclaredannotation"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.getDeclaredAnnotation"
signature: "public <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)"
title: "AccessibleObject.getDeclaredAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.getDeclaredAnnotation

```java
public <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)
```

{@inheritDoc}

 

 Note that any annotation returned by this method is a
 declaration annotation.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
