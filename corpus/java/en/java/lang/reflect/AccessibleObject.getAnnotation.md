---
id: "java-en-function-accessibleobject-getannotation"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.getAnnotation"
signature: "public <T extends Annotation> T getAnnotation(Class<T> annotationClass)"
title: "AccessibleObject.getAnnotation"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.getAnnotation

```java
public <T extends Annotation> T getAnnotation(Class<T> annotationClass)
```

{@inheritDoc}

 

 Note that any annotation returned by this method is a
 declaration annotation.

 The default implementation throws `UnsupportedOperationException`; subclasses should override this method.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.5*
