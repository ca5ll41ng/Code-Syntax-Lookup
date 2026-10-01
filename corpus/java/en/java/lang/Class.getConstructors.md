---
id: "java-en-function-class-getconstructors"
language: "java"
lang: "en"
category: "function"
name: "Class.getConstructors"
signature: "public Constructor<?>[] getConstructors()"
title: "Class.getConstructors"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getConstructors

```java
public Constructor<?>[] getConstructors()
```

Returns an array containing `Constructor` objects reflecting
 all the public constructors of the class represented by this
 `Class` object.  An array of length 0 is returned if the
 class has no public constructors, or if the class is an array class, or
 if the class reflects a primitive type or void.

 While this method returns an array of `Constructor` objects (that is an array of constructors from
 this class), the return type of this method is `Constructor<?>[]` and not `Constructor[]` as
 might be expected.  This less informative return type is
 necessary since after being returned from this method, the
 array could be modified to hold `Constructor` objects for
 different classes, which would violate the type guarantees of
 `Constructor[]`.

**返回**

- the array of `Constructor` objects representing the public constructors of this class

**参见**

- #getDeclaredConstructors()

> *Since 1.1*
