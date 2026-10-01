---
id: "java-en-function-annotatedtypevariable-getannotatedownertype"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedTypeVariable.getAnnotatedOwnerType"
signature: "AnnotatedType getAnnotatedOwnerType()"
title: "AnnotatedTypeVariable.getAnnotatedOwnerType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedTypeVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedTypeVariable.getAnnotatedOwnerType

```java
AnnotatedType getAnnotatedOwnerType()
```

Returns the potentially annotated type that this type is a member of, if
 this type represents a nested type. For example, if this type is
 `@TA O.I`, return a representation of `@TA O`.

 

Returns `null` for an `AnnotatedType` that is an instance
     of `AnnotatedTypeVariable`.

**返回**

- `null`

> *Since 9*
