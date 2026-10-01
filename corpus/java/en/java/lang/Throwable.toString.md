---
id: "java-en-function-throwable-tostring"
language: "java"
lang: "en"
category: "function"
name: "Throwable.toString"
signature: "public String toString()"
title: "Throwable.toString"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.toString

```java
public String toString()
```

Returns a short description of this throwable.
 The result is the concatenation of:
 
 
-  the `getName() name` of the class of this object
 
-  ": " (a colon and a space)
 
-  the result of invoking this object's `getLocalizedMessage`
      method
 

 If `getLocalizedMessage` returns `null`, then just
 the class name is returned.

**返回**

- a string representation of this throwable.
