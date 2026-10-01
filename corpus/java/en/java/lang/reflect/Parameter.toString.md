---
id: "java-en-function-parameter-tostring"
language: "java"
lang: "en"
category: "function"
name: "Parameter.toString"
signature: "public String toString()"
title: "Parameter.toString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Parameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parameter.toString

```java
public String toString()
```

Returns a string describing this parameter.  The format is the
 modifiers for the parameter, if any, in canonical order as
 recommended by The Java Language
 Specification, followed by the fully-qualified type of
 the parameter (excluding the last [] if the parameter is
 variable arity), followed by "..." if the parameter is variable
 arity, followed by a space, followed by the name of the
 parameter.

**返回**

- A string representation of the parameter and associated information.
