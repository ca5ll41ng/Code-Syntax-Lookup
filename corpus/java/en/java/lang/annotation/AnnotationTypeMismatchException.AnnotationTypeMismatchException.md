---
id: "java-en-function-annotationtypemismatchexception-annotationtypemismatchexception"
language: "java"
lang: "en"
category: "function"
name: "AnnotationTypeMismatchException.AnnotationTypeMismatchException"
signature: "public AnnotationTypeMismatchException(Method element, String foundType)"
title: "AnnotationTypeMismatchException.AnnotationTypeMismatchException"
directive: "method"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/AnnotationTypeMismatchException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationTypeMismatchException.AnnotationTypeMismatchException

```java
public AnnotationTypeMismatchException(Method element, String foundType)
```

Constructs an AnnotationTypeMismatchException for the specified
 annotation type element and found data type.

**参数**

- **element** — the `Method` object for the annotation element, may be `null`
- **foundType** — the (erroneous) type of data found in the annotation. This string may, but is not required to, contain the value as well.  The exact format of the string is unspecified, may be `null`.
