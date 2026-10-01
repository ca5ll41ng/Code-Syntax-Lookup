---
id: "java-en-function-class-isinstance"
language: "java"
lang: "en"
category: "function"
name: "Class.isInstance"
signature: "public native boolean isInstance(Object obj)"
title: "Class.isInstance"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isInstance

```java
public native boolean isInstance(Object obj)
```

Determines if the specified `Object` is assignment-compatible
 with the object represented by this `Class`.  This method is
 the dynamic equivalent of the Java language `instanceof`
 operator. The method returns `true` if the specified
 `Object` argument is non-null and can be cast to the
 reference type represented by this `Class` object without
 raising a `ClassCastException.` It returns `false`
 otherwise.

 

 Specifically, if this `Class` object represents a
 declared class, this method returns `true` if the specified
 `Object` argument is an instance of the represented class (or
 of any of its subclasses); it returns `false` otherwise. If
 this `Class` object represents an array class, this method
 returns `true` if the specified `Object` argument
 can be converted to an object of the array class by an identity
 conversion or by a widening reference conversion; it returns
 `false` otherwise. If this `Class` object
 represents an interface, this method returns `true` if the
 class or any superclass of the specified `Object` argument
 implements this interface; it returns `false` otherwise. If
 this `Class` object represents a primitive type, this method
 returns `false`.

**参数**

- **obj** — the object to check, may be `null`

**返回**

- true if `obj` is an instance of this class

> *Since 1.1*
