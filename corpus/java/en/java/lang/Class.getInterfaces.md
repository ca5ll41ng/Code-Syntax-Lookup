---
id: "java-en-function-class-getinterfaces"
language: "java"
lang: "en"
category: "function"
name: "Class.getInterfaces"
signature: "public Class<?>[] getInterfaces()"
title: "Class.getInterfaces"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getInterfaces

```java
public Class<?>[] getInterfaces()
```

Returns the interfaces directly implemented by the class or interface
 represented by this `Class` object.

 

If this `Class` object represents a class, the return value is an array
 containing objects representing all interfaces directly implemented by
 the class.  The order of the interface objects in the array corresponds
 to the order of the interface names in the `implements` clause of
 the declaration of the class represented by this `Class` object.  For example,
 given the declaration:
 
 `class Shimmer implements FloorWax, DessertTopping { ... `}
 
 suppose the value of `s` is an instance of
 `Shimmer`; the value of the expression:
 
 `s.getClass().getInterfaces()[0]`
 
 is the `Class` object that represents interface
 `FloorWax`; and the value of:
 
 `s.getClass().getInterfaces()[1]`
 
 is the `Class` object that represents interface
 `DessertTopping`.

 

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
