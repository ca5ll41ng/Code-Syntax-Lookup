---
id: "java-en-function-method-tostring"
language: "java"
lang: "en"
category: "function"
name: "Method.toString"
signature: "public String toString()"
title: "Method.toString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method.toString

```java
public String toString()
```

Returns a string describing this `Method`.  The string is
 formatted as the method access modifiers, if any, followed by
 the method return type, followed by a space, followed by the
 class declaring the method, followed by a period, followed by
 the method name, followed by a parenthesized, comma-separated
 list of the method's formal parameter types. If the method
 throws checked exceptions, the parameter list is followed by a
 space, followed by the word "`throws`" followed by a
 comma-separated list of the thrown exception types.
 For example:
 
```

    public boolean java.lang.Object.equals(java.lang.Object)
 
```

 

The access modifiers are placed in canonical order as
 specified by "The Java Language Specification".  This is
 `public`, `protected` or `private` first,
 and then other modifiers in the following order:
 `abstract`, `default`, `static`, `final`,
 `synchronized`, `native`, `strictfp`.

**返回**

- a string describing this `Method`
