---
id: "java-en-function-class-getenclosingmethod"
language: "java"
lang: "en"
category: "function"
name: "Class.getEnclosingMethod"
signature: "public Method getEnclosingMethod()"
title: "Class.getEnclosingMethod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getEnclosingMethod

```java
public Method getEnclosingMethod()
```

If this `Class` object represents a local or anonymous
 class within a method, returns a `java.lang.reflect.Method Method` object representing the
 immediately enclosing method of the underlying class. Returns
 `null` otherwise.

 In particular, this method returns `null` if the underlying
 class is a local or anonymous class immediately enclosed by a class or
 interface declaration, instance initializer or static initializer.

**返回**

- the immediately enclosing method of the underlying class, if that class is a local or anonymous class; otherwise `null`.

> *Since 1.5*
