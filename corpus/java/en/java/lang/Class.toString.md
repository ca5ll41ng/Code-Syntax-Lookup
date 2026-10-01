---
id: "java-en-function-class-tostring"
language: "java"
lang: "en"
category: "function"
name: "Class.toString"
signature: "public String toString()"
title: "Class.toString"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.toString

```java
public String toString()
```

Converts the object to a string. The string representation is the
 string "class" or "interface", followed by a space, and then by the
 name of the class in the format returned by `getName`.
 If this `Class` object represents a primitive type,
 this method returns the name of the primitive type.  If
 this `Class` object represents void this method returns
 "void". If this `Class` object represents an array type,
 this method returns "class " followed by `getName`.

**返回**

- a string representation of this `Class` object.
