---
id: "java-en-function-wildcardtype-getlowerbounds"
language: "java"
lang: "en"
category: "function"
name: "WildcardType.getLowerBounds"
signature: "Type[] getLowerBounds()"
title: "WildcardType.getLowerBounds"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/WildcardType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WildcardType.getLowerBounds

```java
Type[] getLowerBounds()
```

Returns an array of `Type` objects representing the
 lower bound(s) of this type variable.  If no lower bound is
 explicitly declared, the lower bound is the type of `null`.
 In this case, a zero length array is returned.

 

For each lower bound B :
 
   
- if B is a parameterized type or a type variable, it is created,
  (see `java.lang.reflect.ParameterizedType ParameterizedType`
  for the details of the creation process for parameterized types).
   
- Otherwise, B is resolved.
 

 bound, callers of this method should be written to accommodate
 multiple bounds.

**返回**

- an array of Types representing the lower bound(s) of this type variable

**异常**

- **TypeNotPresentException** — if any of the bounds refers to a non-existent type declaration
- **MalformedParameterizedTypeException** — if any of the bounds refer to a parameterized type that cannot be instantiated for any reason
