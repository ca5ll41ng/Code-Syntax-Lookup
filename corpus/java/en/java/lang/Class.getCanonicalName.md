---
id: "java-en-function-class-getcanonicalname"
language: "java"
lang: "en"
category: "function"
name: "Class.getCanonicalName"
signature: "public String getCanonicalName()"
title: "Class.getCanonicalName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getCanonicalName

```java
public String getCanonicalName()
```

Returns the canonical name of the underlying class as
 defined by The Java Language Specification.
 Returns `null` if the underlying class does not have a canonical
 name. Classes without canonical names include:
 
 
- a `isLocalClass() local class`
 
- a `isAnonymousClass() anonymous class`
 
- a `isHidden() hidden class`
 
- an array whose component type does not have a canonical name
 

 The canonical name for a primitive class is the keyword for the
 corresponding primitive type (`byte`, `short`,
 `char`, `int`, and so on).

 

An array type has a canonical name if and only if its
 component type has a canonical name. When an array type has a
 canonical name, it is equal to the canonical name of the
 component type followed by "`[]`".

**返回**

- the canonical name of the underlying class if it exists, and `null` otherwise.

> *Since 1.5*
