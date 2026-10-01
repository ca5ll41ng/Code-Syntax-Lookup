---
id: "java-en-function-class-getgenericsuperclass"
language: "java"
lang: "en"
category: "function"
name: "Class.getGenericSuperclass"
signature: "public Type getGenericSuperclass()"
title: "Class.getGenericSuperclass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getGenericSuperclass

```java
public Type getGenericSuperclass()
```

Returns the `Type` representing the direct superclass of
 the entity (class, interface, primitive type or void) represented by
 this `Class` object.

 

If the superclass is a parameterized type, the `Type`
 object returned must accurately reflect the actual type
 arguments used in the source code. The parameterized type
 representing the superclass is created if it had not been
 created before. See the declaration of `java.lang.reflect.ParameterizedType ParameterizedType` for the
 semantics of the creation process for parameterized types.  If
 this `Class` object represents either the `Object`
 class, an interface, a primitive type, or void, then null is
 returned.  If this `Class` object represents an array class
 then the `Class` object representing the `Object` class is
 returned.

**返回**

- the direct superclass of the class represented by this `Class` object

**异常**

- **java.lang.reflect.GenericSignatureFormatError** — if the generic class signature does not conform to the format specified in section {@jvms 4.7.9} of The Java Virtual Machine Specification
- **TypeNotPresentException** — if the generic superclass refers to a non-existent type declaration
- **java.lang.reflect.MalformedParameterizedTypeException** — if the generic superclass refers to a parameterized type that cannot be instantiated  for any reason

> *Since 1.5*
