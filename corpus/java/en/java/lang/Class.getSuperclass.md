---
id: "java-en-function-class-getsuperclass"
language: "java"
lang: "en"
category: "function"
name: "Class.getSuperclass"
signature: "public native Class<? super T> getSuperclass()"
title: "Class.getSuperclass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getSuperclass

```java
public native Class<? super T> getSuperclass()
```

Returns the `Class` representing the direct superclass of the
 entity (class, interface, primitive type or void) represented by
 this `Class`.  If this `Class` represents either the
 `Object` class, an interface, a primitive type, or void, then
 null is returned.  If this `Class` object represents an array class
 then the `Class` object representing the `Object` class is
 returned.

**返回**

- the direct superclass of the class represented by this `Class` object
