---
id: "java-en-function-constructor-togenericstring"
language: "java"
lang: "en"
category: "function"
name: "Constructor.toGenericString"
signature: "public String toGenericString()"
title: "Constructor.toGenericString"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Constructor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Constructor.toGenericString

```java
public String toGenericString()
```

Returns a string describing this `Constructor`,
 including type parameters.  The string is formatted as the
 constructor access modifiers, if any, followed by an
 angle-bracketed comma separated list of the constructor's type
 parameters, if any, including  informative bounds of the
 type parameters, if any, followed by the fully-qualified name of the
 declaring class, followed by a parenthesized, comma-separated
 list of the constructor's generic formal parameter types.

 If this constructor was declared to take a variable number of
 arguments, instead of denoting the last parameter as
 "Type[]", it is denoted as
 "Type...".

 A space is used to separate access modifiers from one another
 and from the type parameters or class name.  If there are no
 type parameters, the type parameter list is elided; if the type
 parameter list is present, a space separates the list from the
 class name.  If the constructor is declared to throw
 exceptions, the parameter list is followed by a space, followed
 by the word "`throws`" followed by a
 comma-separated list of the generic thrown exception types.

 

The only possible modifiers for constructors are the access
 modifiers `public`, `protected` or
 `private`.  Only one of these may appear, or none if the
 constructor has default (package) access.

**返回**

- a string describing this `Constructor`, include type parameters

> *Since 1.5*
