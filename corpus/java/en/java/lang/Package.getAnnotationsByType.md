---
id: "java-en-function-package-getannotationsbytype"
language: "java"
lang: "en"
category: "function"
name: "Package.getAnnotationsByType"
signature: "public <A extends Annotation> A[] getAnnotationsByType(Class<A> annotationClass)"
title: "Package.getAnnotationsByType"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getAnnotationsByType

```java
public <A extends Annotation> A[] getAnnotationsByType(Class<A> annotationClass)
```

{@inheritDoc}
 

Note that any annotations returned by this method are
 declaration annotations.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
