---
id: "java-en-function-class-getgenericinterfaces"
language: "java"
lang: "en"
category: "function"
name: "Class.getGenericInterfaces"
signature: "public Type[] getGenericInterfaces()"
title: "Class.getGenericInterfaces"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getGenericInterfaces

```java
public Type[] getGenericInterfaces()
```

Returns the `Type`s representing the interfaces
 directly implemented by the class or interface represented by
 this `Class` object.

 

If a superinterface is a parameterized type, the
 `Type` object returned for it must accurately reflect
 the actual type arguments used in the source code. The
 parameterized type representing each superinterface is created
 if it had not been created before. See the declaration of
 `java.lang.reflect.ParameterizedType ParameterizedType`
 for the semantics of the creation process for parameterized
 types.

 

If this `Class` object represents a class, the return value is an array
 containing objects representing all interfaces directly implemented by
 the class.  The order of the interface objects in the array corresponds
 to the order of the interface names in the `implements` clause of
 the declaration of the class represented by this `Class` object.

 

If this `Class` object represents an interface, the array contains objects
 representing all interfaces directly extended by the interface.  The
 order of the interface objects in the array corresponds to the order of
 the interface names in the `extends` clause of the declaration of
 the interface represented by this `Class` object.

 

If this `Class` object represents a class or interface that implements no
 interfaces, the method returns an array of length 0.

 

If this `Class` object represents a primitive type or void, the method
 returns an array of length 0.

 

If this `Class` object represents an array type, the
 interfaces `Cloneable` and `java.io.Serializable` are
 returned in that order.

**返回**

- an array of interfaces directly implemented by this class

**异常**

- **java.lang.reflect.GenericSignatureFormatError** — if the generic class signature does not conform to the format specified in section {@jvms 4.7.9} of The Java Virtual Machine Specification
- **TypeNotPresentException** — if any of the generic superinterfaces refers to a non-existent type declaration
- **java.lang.reflect.MalformedParameterizedTypeException** — if any of the generic superinterfaces refer to a parameterized type that cannot be instantiated for any reason

> *Since 1.5*
