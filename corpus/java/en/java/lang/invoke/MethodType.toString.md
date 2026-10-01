---
id: "java-en-function-methodtype-tostring"
language: "java"
lang: "en"
category: "function"
name: "MethodType.toString"
signature: "public String toString()"
title: "MethodType.toString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.toString

```java
public String toString()
```

Returns a string representation of the method type,
 of the form `"(PT0,PT1...)RT"`.
 The string representation of a method type is a
 parenthesis enclosed, comma separated list of type names,
 followed immediately by the return type.
 

 Each type is represented by its
 `getSimpleName simple name`.
