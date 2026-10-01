---
id: "java-en-function-genericdeclaration-gettypeparameters"
language: "java"
lang: "en"
category: "function"
name: "GenericDeclaration.getTypeParameters"
signature: "public TypeVariable<?>[] getTypeParameters()"
title: "GenericDeclaration.getTypeParameters"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/GenericDeclaration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GenericDeclaration.getTypeParameters

```java
public TypeVariable<?>[] getTypeParameters()
```

Returns an array of `TypeVariable` objects that
 represent the type variables declared by the generic
 declaration represented by this `GenericDeclaration`
 object, in declaration order.  Returns an array of length 0 if
 the underlying generic declaration declares no type variables.

**返回**

- an array of `TypeVariable` objects that represent the type variables declared by this generic declaration

**异常**

- **GenericSignatureFormatError** — if the generic signature of this generic declaration does not conform to the format specified in The Java Virtual Machine Specification
