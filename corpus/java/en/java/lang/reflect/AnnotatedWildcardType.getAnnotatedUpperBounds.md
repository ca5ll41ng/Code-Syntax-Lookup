---
id: "java-en-function-annotatedwildcardtype-getannotatedupperbounds"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedWildcardType.getAnnotatedUpperBounds"
signature: "AnnotatedType[] getAnnotatedUpperBounds()"
title: "AnnotatedWildcardType.getAnnotatedUpperBounds"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedWildcardType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedWildcardType.getAnnotatedUpperBounds

```java
AnnotatedType[] getAnnotatedUpperBounds()
```

Returns the potentially annotated upper bounds of this wildcard type.
 If no upper bound is explicitly declared, the upper bound is
 unannotated `Object`

 bound, callers of this method should be written to accommodate
 multiple bounds.

**返回**

- the potentially annotated upper bounds of this wildcard type

**参见**

- WildcardType#getUpperBounds()
