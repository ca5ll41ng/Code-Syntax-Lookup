---
id: "java-en-function-class-getannotatedinterfaces"
language: "java"
lang: "en"
category: "function"
name: "Class.getAnnotatedInterfaces"
signature: "public AnnotatedType[] getAnnotatedInterfaces()"
title: "Class.getAnnotatedInterfaces"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getAnnotatedInterfaces

```java
public AnnotatedType[] getAnnotatedInterfaces()
```

Returns an array of `AnnotatedType` objects that represent the use
 of types to specify superinterfaces of the entity represented by this
 `Class` object. (The use of type Foo to specify a
 superinterface in '... implements Foo' is distinct from the
 declaration of interface Foo.)

 

 If this `Class` object represents a class, the return value is
 an array containing objects representing the uses of interface types to
 specify interfaces implemented by the class. The order of the objects in
 the array corresponds to the order of the interface types used in the
 'implements' clause of the declaration of this `Class` object.

 

 If this `Class` object represents an interface, the return
 value is an array containing objects representing the uses of interface
 types to specify interfaces directly extended by the interface. The
 order of the objects in the array corresponds to the order of the
 interface types used in the 'extends' clause of the declaration of this
 `Class` object.

 

 If this `Class` object represents a class or interface whose
 declaration does not explicitly indicate any annotated superinterfaces,
 the return value is an array of length 0.

 

 If this `Class` object represents either the `Object`
 class, an array type, a primitive type, or void, the return value is an
 array of length 0.

**返回**

- an array representing the superinterfaces

> *Since 1.8*
