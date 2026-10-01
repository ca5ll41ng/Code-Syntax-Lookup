---
id: "java-en-function-method-getgenericreturntype"
language: "java"
lang: "en"
category: "function"
name: "Method.getGenericReturnType"
signature: "public Type getGenericReturnType()"
title: "Method.getGenericReturnType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method.getGenericReturnType

```java
public Type getGenericReturnType()
```

Returns a `Type` object that represents the formal return
 type of the method represented by this `Method` object.

 

If the return type is a parameterized type,
 the `Type` object returned must accurately reflect
 the actual type arguments used in the source code.

 

If the return type is a type variable or a parameterized type, it
 is created. Otherwise, it is resolved.

**返回**

- a `Type` object that represents the formal return type of the underlying  method

**异常**

- **GenericSignatureFormatError** — if the generic method signature does not conform to the format specified in The Java Virtual Machine Specification
- **TypeNotPresentException** — if the underlying method's return type refers to a non-existent class or interface declaration
- **MalformedParameterizedTypeException** — if the underlying method's return type refers to a parameterized type that cannot be instantiated for any reason

> *Since 1.5*
