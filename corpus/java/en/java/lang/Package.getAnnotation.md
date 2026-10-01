---
id: "java-en-function-package-getannotation"
language: "java"
lang: "en"
category: "function"
name: "Package.getAnnotation"
signature: "public <A extends Annotation> A getAnnotation(Class<A> annotationClass)"
title: "Package.getAnnotation"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getAnnotation

```java
public <A extends Annotation> A getAnnotation(Class<A> annotationClass)
```

{@inheritDoc}
 

Note that any annotation returned by this method is a
 declaration annotation.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.5*
