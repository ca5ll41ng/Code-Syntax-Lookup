---
id: "java-en-function-module-getannotation"
language: "java"
lang: "en"
category: "function"
name: "Module.getAnnotation"
signature: "public <T extends Annotation> T getAnnotation(Class<T> annotationClass)"
title: "Module.getAnnotation"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.getAnnotation

```java
public <T extends Annotation> T getAnnotation(Class<T> annotationClass)
```

{@inheritDoc}
 This method returns `null` when invoked on an unnamed module.

 

 Note that any annotation returned by this method is a
 declaration annotation.
