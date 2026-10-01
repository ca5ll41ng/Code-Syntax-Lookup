---
id: "java-en-function-class-isvalue"
language: "java"
lang: "en"
category: "function"
name: "Class.isValue"
signature: "public boolean isValue()"
title: "Class.isValue"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isValue

```java
public boolean isValue()
```

{@return `true` if this `Class` object represents a value class,
 otherwise `false`}

 

A value class is declared with the `value` modifier. If this
 `Class` object represents an interface, array type, primitive type,
 or `void`, the result is `false`.

 

This method returns `true` if and only if this `Class`
 object represents a class that uses preview features, and the class does
 not have the `IDENTITY ACC_IDENTITY` flag set.
 The `ACC_IDENTITY` flag is considered always set for a class that
 does not use preview features; consequently, this method always returns
 `false` when preview features are disabled.

**参见**

- AccessFlag#IDENTITY

> *Since 28*
