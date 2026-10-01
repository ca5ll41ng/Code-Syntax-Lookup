---
id: "java-en-function-annotatedwildcardtype-getannotatedownertype"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedWildcardType.getAnnotatedOwnerType"
signature: "AnnotatedType getAnnotatedOwnerType()"
title: "AnnotatedWildcardType.getAnnotatedOwnerType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedWildcardType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedWildcardType.getAnnotatedOwnerType

```java
AnnotatedType getAnnotatedOwnerType()
```

Returns the potentially annotated type that this type is a member of, if
 this type represents a nested type. For example, if this type is
 `@TA O.I`, return a representation of `@TA O`.

 

Returns `null` for an `AnnotatedType` that is an instance
     of `AnnotatedWildcardType`.

**返回**

- `null`

> *Since 9*
