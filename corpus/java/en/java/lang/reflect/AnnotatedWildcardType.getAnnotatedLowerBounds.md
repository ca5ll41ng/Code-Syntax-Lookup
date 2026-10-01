---
id: "java-en-function-annotatedwildcardtype-getannotatedlowerbounds"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedWildcardType.getAnnotatedLowerBounds"
signature: "AnnotatedType[] getAnnotatedLowerBounds()"
title: "AnnotatedWildcardType.getAnnotatedLowerBounds"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedWildcardType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedWildcardType.getAnnotatedLowerBounds

```java
AnnotatedType[] getAnnotatedLowerBounds()
```

Returns the potentially annotated lower bounds of this wildcard type.
 If no lower bound is explicitly declared, the lower bound is the
 type of null. In this case, a zero length array is returned.

 bound, callers of this method should be written to accommodate
 multiple bounds.

**返回**

- the potentially annotated lower bounds of this wildcard type or an empty array if no lower bound is explicitly declared.

**参见**

- WildcardType#getLowerBounds()
