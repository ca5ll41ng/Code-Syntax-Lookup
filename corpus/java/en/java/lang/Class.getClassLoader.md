---
id: "java-en-function-class-getclassloader"
language: "java"
lang: "en"
category: "function"
name: "Class.getClassLoader"
signature: "public ClassLoader getClassLoader()"
title: "Class.getClassLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getClassLoader

```java
public ClassLoader getClassLoader()
```

Returns the class loader for the class.  Some implementations may use
 null to represent the bootstrap class loader. This method will return
 null in such implementations if this class was loaded by the bootstrap
 class loader.

 

If this `Class` object
 represents a primitive type or void, null is returned.

**返回**

- the class loader that loaded the class or interface represented by this `Class` object.

**参见**

- java.lang.ClassLoader
