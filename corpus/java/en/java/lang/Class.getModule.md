---
id: "java-en-function-class-getmodule"
language: "java"
lang: "en"
category: "function"
name: "Class.getModule"
signature: "public Module getModule()"
title: "Class.getModule"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getModule

```java
public Module getModule()
```

Returns the module that this class or interface is a member of.

 If this class represents an array type then this method returns the
 `Module` for the element type. If this class represents a
 primitive type or void, then the `Module` object for the
 `java.base` module is returned.

 If this class is in an unnamed module then the `getUnnamedModule() unnamed` `Module` of the class
 loader for this class is returned.

**返回**

- the module that this class or interface is a member of

> *Since 9*
