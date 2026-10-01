---
id: "java-en-function-class-getdeclaredconstructors"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredConstructors"
signature: "public Constructor<?>[] getDeclaredConstructors()"
title: "Class.getDeclaredConstructors"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredConstructors

```java
public Constructor<?>[] getDeclaredConstructors()
```

Returns an array of `Constructor` objects reflecting all the
 constructors implicitly or explicitly declared by the class represented by this
 `Class` object. These are public, protected, default
 (package) access, and private constructors.  The elements in the array
 returned are not sorted and are not in any particular order.  If the
 class has a default constructor (JLS {@jls 8.8.9}), it is included in the returned array.
 If a record class has a canonical constructor (JLS {@jls
 8.10.4.1}, {@jls 8.10.4.2}), it is included in the returned array.

 This method returns an array of length 0 if this `Class`
 object represents an interface, a primitive type, an array class, or
 void.

**返回**

- the array of `Constructor` objects representing all the declared constructors of this class

**参见**

- #getConstructors()

> *Since 1.1*
