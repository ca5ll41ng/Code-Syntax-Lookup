---
id: "java-en-function-class-forname"
language: "java"
lang: "en"
category: "function"
name: "Class.forName"
signature: "public static Class<?> forName(String className) throws ClassNotFoundException"
title: "Class.forName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.forName

```java
public static Class<?> forName(String className) throws ClassNotFoundException
```

Returns the `Class` object associated with the class or
 interface with the given string name.  Invoking this method is
 equivalent to:

 {@snippet lang="java" :
 Class.forName(className, true, currentLoader)
 }

 where `currentLoader` denotes the defining class loader of
 the current class.

 

 For example, the following code fragment returns the
 runtime `Class` object for the class named
 `java.lang.Thread`:

 {@snippet lang="java" :
 Class<?> t = Class.forName("java.lang.Thread");
 }
 

 A call to `forName("X")` causes the class named
 `X` to be initialized.

 

 In cases where this method is called from a context where there is no
 caller frame on the stack (e.g. when called directly from a JNI
 attached thread), the system class loader is used.

**参数**

- **className** — the `#binary-name binary name` of the class or the string representing an array type

**返回**

- the `Class` object for the class with the specified name.

**异常**

- **LinkageError** — if the linkage fails
- **ExceptionInInitializerError** — if the initialization provoked by this method fails
- **ClassNotFoundException** — if the class cannot be located
