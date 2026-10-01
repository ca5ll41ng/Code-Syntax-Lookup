---
id: "java-en-function-annotatedtype-getannotatedownertype"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedType.getAnnotatedOwnerType"
signature: "default AnnotatedType getAnnotatedOwnerType()"
title: "AnnotatedType.getAnnotatedOwnerType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedType.getAnnotatedOwnerType

```java
default AnnotatedType getAnnotatedOwnerType()
```

Returns the potentially annotated type that this type is a member of, if
 this type represents a nested type. For example, if this type is
 `@TA O.I`, return a representation of `@TA O`.

 

Returns `null` if this `AnnotatedType` represents a
     top-level class or interface, or a local or anonymous class, or
     a primitive type, or void.

 

Returns `null` if this `AnnotatedType` is an instance of
     `AnnotatedArrayType`, `AnnotatedTypeVariable`, or
     `AnnotatedWildcardType`.

 This default implementation returns `null` and performs no other
 action.

**返回**

- an `AnnotatedType` object representing the potentially annotated type that this type is a member of, or `null`

**异常**

- **TypeNotPresentException** — if the owner type refers to a non-existent class or interface declaration
- **MalformedParameterizedTypeException** — if the owner type refers to a parameterized type that cannot be instantiated for any reason

> *Since 9*
