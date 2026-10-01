---
id: "java-en-function-annotatedparameterizedtype-getannotatedactualtypearguments"
language: "java"
lang: "en"
category: "function"
name: "AnnotatedParameterizedType.getAnnotatedActualTypeArguments"
signature: "AnnotatedType[] getAnnotatedActualTypeArguments()"
title: "AnnotatedParameterizedType.getAnnotatedActualTypeArguments"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedParameterizedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedParameterizedType.getAnnotatedActualTypeArguments

```java
AnnotatedType[] getAnnotatedActualTypeArguments()
```

Returns the potentially annotated actual type arguments of this parameterized type.

 

Note that in some cases, the returned array can be empty. This can occur
 if this annotated type represents a non-parameterized type nested within
 a parameterized type.

**返回**

- the potentially annotated actual type arguments of this parameterized type

**参见**

- ParameterizedType#getActualTypeArguments()
