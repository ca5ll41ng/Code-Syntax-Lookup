---
id: "java-en-function-class-getdeclaringclass"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaringClass"
signature: "public Class<?> getDeclaringClass()"
title: "Class.getDeclaringClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaringClass

```java
public Class<?> getDeclaringClass()
```

If the class or interface represented by this `Class` object
 is a member of another class, returns the `Class` object
 representing the class in which it was declared.  This method returns
 null if this class or interface is not a member of any other class.  If
 this `Class` object represents an array class, a primitive
 type, or void, then this method returns null.

**返回**

- the declaring class for this class

> *Since 1.1*
