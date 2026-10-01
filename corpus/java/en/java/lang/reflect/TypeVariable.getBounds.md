---
id: "java-en-function-typevariable-getbounds"
language: "java"
lang: "en"
category: "function"
name: "TypeVariable.getBounds"
signature: "Type[] getBounds()"
title: "TypeVariable.getBounds"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/TypeVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeVariable.getBounds

```java
Type[] getBounds()
```

Returns an array of `Type` objects representing the
 upper bound(s) of this type variable.  If no upper bound is
 explicitly declared, the upper bound is `Object`.

 

For each upper bound B:  
- if B is a parameterized
 type or a type variable, it is created, (see `java.lang.reflect.ParameterizedType ParameterizedType` for the
 details of the creation process for parameterized types).
 
- Otherwise, B is resolved.

**返回**

- an array of `Type`s representing the upper bound(s) of this type variable

**异常**

- **TypeNotPresentException** — if any of the bounds refers to a non-existent type declaration
- **MalformedParameterizedTypeException** — if any of the bounds refer to a parameterized type that cannot be instantiated for any reason
