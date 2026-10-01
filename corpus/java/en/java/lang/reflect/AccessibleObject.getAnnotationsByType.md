---
id: "java-en-function-accessibleobject-getannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.getAnnotationsByType"
signature: "public <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)"
title: "AccessibleObject.getAnnotationsByType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.getAnnotationsByType

```java
public <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)
```

{@inheritDoc}

 

 Note that any annotations returned by this method are
 declaration annotations.

 The default implementation throws `UnsupportedOperationException`; subclasses should override this method.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
