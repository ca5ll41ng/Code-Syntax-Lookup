---
id: "java-en-function-binding-getclassname"
language: "java"
lang: "en"
category: "function"
name: "Binding.getClassName"
signature: "public String getClassName()"
title: "Binding.getClassName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Binding.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Binding.getClassName

```java
public String getClassName()
```

Retrieves the class name of the object bound to the name of this binding.
 If the class name has been set explicitly, return it.
 Otherwise, if this binding contains a non-null object,
 that object's class name is used. Otherwise, null is returned.

**返回**

- A possibly null string containing class name of object bound.
