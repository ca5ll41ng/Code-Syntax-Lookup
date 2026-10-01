---
id: "java-en-function-field-getgenerictype"
language: "java"
lang: "en"
category: "function"
name: "Field.getGenericType"
signature: "public Type getGenericType()"
title: "Field.getGenericType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.getGenericType

```java
public Type getGenericType()
```

Returns a `Type` object that represents the declared type for
 the field represented by this `Field` object.

 

If the declared type of the field is a parameterized type,
 the `Type` object returned must accurately reflect the
 actual type arguments used in the source code.

 

If the type of the underlying field is a type variable or a
 parameterized type, it is created. Otherwise, it is resolved.

**返回**

- a `Type` object that represents the declared type for the field represented by this `Field` object

**异常**

- **GenericSignatureFormatError** — if the generic field signature does not conform to the format specified in The Java Virtual Machine Specification
- **TypeNotPresentException** — if the generic type signature of the underlying field refers to a non-existent class or interface declaration
- **MalformedParameterizedTypeException** — if the generic signature of the underlying field refers to a parameterized type that cannot be instantiated for any reason

> *Since 1.5*
