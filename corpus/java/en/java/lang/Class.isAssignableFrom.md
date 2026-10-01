---
id: "java-en-function-class-isassignablefrom"
language: "java"
lang: "en"
category: "function"
name: "Class.isAssignableFrom"
signature: "public native boolean isAssignableFrom(Class<?> cls)"
title: "Class.isAssignableFrom"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isAssignableFrom

```java
public native boolean isAssignableFrom(Class<?> cls)
```

Determines if the class or interface represented by this
 `Class` object is either the same as, or is a superclass or
 superinterface of, the class or interface represented by the specified
 `Class` parameter. It returns `true` if so;
 otherwise it returns `false`. If this `Class`
 object represents a primitive type, this method returns
 `true` if the specified `Class` parameter is
 exactly this `Class` object; otherwise it returns
 `false`.

 

 Specifically, this method tests whether the type represented by the
 specified `Class` parameter can be converted to the type
 represented by this `Class` object via an identity conversion
 or via a widening reference conversion. See The Java Language
 Specification, sections {@jls 5.1.1} and {@jls 5.1.4},
 for details.

**参数**

- **cls** — the `Class` object to be checked

**返回**

- the `boolean` value indicating whether objects of the type `cls` can be assigned to objects of this class

> *Since 1.1*
