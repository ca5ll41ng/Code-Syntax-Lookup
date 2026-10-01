---
id: "java-en-function-constructor-tostring"
language: "java"
lang: "en"
category: "function"
name: "Constructor.toString"
signature: "public String toString()"
title: "Constructor.toString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Constructor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Constructor.toString

```java
public String toString()
```

Returns a string describing this `Constructor`.  The string is
 formatted as the constructor access modifiers, if any,
 followed by the fully-qualified name of the declaring class,
 followed by a parenthesized, comma-separated list of the
 constructor's formal parameter types.  For example:
 
```
`public java.util.HashMap(int,float)
 `
```

 

If the constructor is declared to throw exceptions, the
 parameter list is followed by a space, followed by the word
 "`throws`" followed by a comma-separated list of the
 thrown exception types.

 

The only possible modifiers for constructors are the access
 modifiers `public`, `protected` or
 `private`.  Only one of these may appear, or none if the
 constructor has default (package) access.

**返回**

- a string describing this `Constructor`
