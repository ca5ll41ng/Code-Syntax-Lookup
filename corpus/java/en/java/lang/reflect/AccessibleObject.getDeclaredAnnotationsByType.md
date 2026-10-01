---
id: "java-en-function-accessibleobject-getdeclaredannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.getDeclaredAnnotationsByType"
signature: "public <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)"
title: "AccessibleObject.getDeclaredAnnotationsByType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.getDeclaredAnnotationsByType

```java
public <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)
```

{@inheritDoc}

 

 Note that any annotations returned by this method are
 declaration annotations.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
