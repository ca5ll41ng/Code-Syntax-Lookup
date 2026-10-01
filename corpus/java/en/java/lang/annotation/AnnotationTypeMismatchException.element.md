---
id: "java-en-function-annotationtypemismatchexception-element"
language: "java"
lang: "en"
category: "function"
name: "AnnotationTypeMismatchException.element"
signature: "public Method element()"
title: "AnnotationTypeMismatchException.element"
directive: "method"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/AnnotationTypeMismatchException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationTypeMismatchException.element

```java
public Method element()
```

Returns the `Method` object for the incorrectly typed element.
 The value may be unavailable if this exception has been
 serialized and then read back in.

**返回**

- the `Method` object for the incorrectly typed element, or `null` if unavailable
