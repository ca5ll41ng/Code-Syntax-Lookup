---
id: "java-en-function-genericarraytype-getgenericcomponenttype"
language: "java"
lang: "en"
category: "function"
name: "GenericArrayType.getGenericComponentType"
signature: "Type getGenericComponentType()"
title: "GenericArrayType.getGenericComponentType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/GenericArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GenericArrayType.getGenericComponentType

```java
Type getGenericComponentType()
```

Returns a `Type` object representing the component type
 of this array. This method creates the component type of the
 array.  See the declaration of `java.lang.reflect.ParameterizedType ParameterizedType` for the
 semantics of the creation process for parameterized types and
 see `java.lang.reflect.TypeVariable TypeVariable` for the
 creation process for type variables.

**返回**

- a `Type` object representing the component type of this array

**异常**

- **TypeNotPresentException** — if the underlying array type's component type refers to a non-existent class or interface declaration
- **MalformedParameterizedTypeException** — if  the underlying array type's component type refers to a parameterized type that cannot be instantiated for any reason
