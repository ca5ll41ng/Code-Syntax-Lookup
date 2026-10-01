---
id: "java-en-function-recordcomponent-getgenerictype"
language: "java"
lang: "en"
category: "function"
name: "RecordComponent.getGenericType"
signature: "public Type getGenericType()"
title: "RecordComponent.getGenericType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/RecordComponent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecordComponent.getGenericType

```java
public Type getGenericType()
```

Returns a `Type` object that represents the declared type for
 this record component.

 

If the declared type of the record component is a parameterized type,
 the `Type` object returned reflects the actual type arguments used
 in the source code.

 

If the type of the underlying record component is a type variable or a
 parameterized type, it is created. Otherwise, it is resolved.

**返回**

- a `Type` object that represents the declared type for this record component

**异常**

- **GenericSignatureFormatError** — if the generic record component signature does not conform to the format specified in The Java Virtual Machine Specification
- **TypeNotPresentException** — if the generic type signature of the underlying record component refers to a non-existent type declaration
- **MalformedParameterizedTypeException** — if the generic signature of the underlying record component refers to a parameterized type that cannot be instantiated for any reason
