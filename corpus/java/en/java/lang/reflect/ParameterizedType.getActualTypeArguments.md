---
id: "java-en-function-parameterizedtype-getactualtypearguments"
language: "java"
lang: "en"
category: "function"
name: "ParameterizedType.getActualTypeArguments"
signature: "Type[] getActualTypeArguments()"
title: "ParameterizedType.getActualTypeArguments"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/ParameterizedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterizedType.getActualTypeArguments

```java
Type[] getActualTypeArguments()
```

Returns an array of `Type` objects representing the actual type
 arguments to this type.

 

Note that in some cases, the returned array be empty. This can occur
 if this type represents a non-parameterized type nested within
 a parameterized type.

**返回**

- an array of `Type` objects representing the actual type arguments to this type

**异常**

- **TypeNotPresentException** — if any of the actual type arguments refers to a non-existent class or interface declaration
- **MalformedParameterizedTypeException** — if any of the actual type parameters refer to a parameterized type that cannot be instantiated for any reason

> *Since 1.5*
