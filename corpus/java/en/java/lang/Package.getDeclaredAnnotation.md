---
id: "java-en-function-package-getdeclaredannotation"
language: "java"
lang: "en"
category: "function"
name: "Package.getDeclaredAnnotation"
signature: "public <A extends Annotation> A getDeclaredAnnotation(Class<A> annotationClass)"
title: "Package.getDeclaredAnnotation"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getDeclaredAnnotation

```java
public <A extends Annotation> A getDeclaredAnnotation(Class<A> annotationClass)
```

{@inheritDoc}
 

Note that any annotation returned by this method is a
 declaration annotation.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
