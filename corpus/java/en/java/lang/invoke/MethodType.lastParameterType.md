---
id: "java-en-function-methodtype-lastparametertype"
language: "java"
lang: "en"
category: "function"
name: "MethodType.lastParameterType"
signature: "public Class<?> lastParameterType()"
title: "MethodType.lastParameterType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.lastParameterType

```java
public Class<?> lastParameterType()
```

Returns the last parameter type of this method type.
 If this type has no parameters, the sentinel value
 `void.class` is returned instead.
 

 The sentinel value is chosen so that reflective queries can be
 made directly against the result value.
 The sentinel value cannot be confused with a real parameter,
 since `void` is never acceptable as a parameter type.
 For variable arity invocation modes, the expression
 `getComponentType lastParameterType`
 is useful to query the type of the "varargs" parameter.

**返回**

- the last parameter type if any, else `void.class`

> *Since 10*
