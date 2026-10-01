---
id: "java-en-function-annotatedtypevariable-getannotatedbounds"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedTypeVariable.getAnnotatedBounds"
signature: "AnnotatedType[] getAnnotatedBounds()"
title: "AnnotatedTypeVariable.getAnnotatedBounds"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedTypeVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedTypeVariable.getAnnotatedBounds

```java
AnnotatedType[] getAnnotatedBounds()
```

Returns the potentially annotated bounds of this type variable.
 If no bound is explicitly declared, the bound is unannotated
 `Object`.

**返回**

- the potentially annotated bounds of this type variable

**参见**

- TypeVariable#getBounds()
