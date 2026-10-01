---
id: "java-en-function-class-gettypeparameters"
language: "java"
lang: "en"
category: "function"
name: "Class.getTypeParameters"
signature: "public TypeVariable<Class<T>>[] getTypeParameters()"
title: "Class.getTypeParameters"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getTypeParameters

```java
public TypeVariable<Class<T>>[] getTypeParameters()
```

Returns an array of `TypeVariable` objects that represent the
 type variables declared by the generic declaration represented by this
 `GenericDeclaration` object, in declaration order.  Returns an
 array of length 0 if the underlying generic declaration declares no type
 variables.

**返回**

- an array of `TypeVariable` objects that represent the type variables declared by this generic declaration

**异常**

- **java.lang.reflect.GenericSignatureFormatError** — if the generic signature of this generic declaration does not conform to the format specified in section {@jvms 4.7.9} of The Java Virtual Machine Specification

> *Since 1.5*
