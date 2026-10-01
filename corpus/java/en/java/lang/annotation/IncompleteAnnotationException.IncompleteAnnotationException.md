---
id: "java-en-function-incompleteannotationexception-incompleteannotationexception"
language: "java"
lang: "en"
category: "function"
name: "IncompleteAnnotationException.IncompleteAnnotationException"
signature: "public IncompleteAnnotationException( Class<? extends Annotation> annotationType, String elementName)"
title: "IncompleteAnnotationException.IncompleteAnnotationException"
directive: "method"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/IncompleteAnnotationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IncompleteAnnotationException.IncompleteAnnotationException

```java
public IncompleteAnnotationException( Class<? extends Annotation> annotationType, String elementName)
```

Constructs an IncompleteAnnotationException to indicate that
 the named element was missing from the specified annotation interface.

**参数**

- **annotationType** — the Class object for the annotation interface
- **elementName** — the name of the missing element

**异常**

- **NullPointerException** — if either parameter is `null`
