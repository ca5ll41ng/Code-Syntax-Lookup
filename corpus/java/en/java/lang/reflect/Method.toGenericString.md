---
id: "java-en-function-method-togenericstring"
language: "java"
lang: "en"
category: "function"
name: "Method.toGenericString"
signature: "public String toGenericString()"
title: "Method.toGenericString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method.toGenericString

```java
public String toGenericString()
```

Returns a string describing this `Method`, including type
 parameters.  The string is formatted as the method access
 modifiers, if any, followed by an angle-bracketed
 comma-separated list of the method's type parameters, if any,
 including informative bounds of the type parameters, if any,
 followed by the method's generic return type, followed by a
 space, followed by the class declaring the method, followed by
 a period, followed by the method name, followed by a
 parenthesized, comma-separated list of the method's generic
 formal parameter types.

 If this method was declared to take a variable number of
 arguments, instead of denoting the last parameter as
 "Type[]", it is denoted as
 "Type...".

 A space is used to separate access modifiers from one another
 and from the type parameters or return type.  If there are no
 type parameters, the type parameter list is elided; if the type
 parameter list is present, a space separates the list from the
 class name.  If the method is declared to throw exceptions, the
 parameter list is followed by a space, followed by the word
 "`throws`" followed by a comma-separated list of the generic
 thrown exception types.

 

The access modifiers are placed in canonical order as
 specified by "The Java Language Specification".  This is
 `public`, `protected` or `private` first,
 and then other modifiers in the following order:
 `abstract`, `default`, `static`, `final`,
 `synchronized`, `native`, `strictfp`.

**返回**

- a string describing this `Method`, include type parameters

> *Since 1.5*
