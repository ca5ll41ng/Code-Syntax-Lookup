---
id: "java-en-function-undeclaredthrowableexception-getundeclaredthrowable"
language: "java"
lang: "en"
category: "function"
name: "UndeclaredThrowableException.getUndeclaredThrowable"
signature: "public Throwable getUndeclaredThrowable()"
title: "UndeclaredThrowableException.getUndeclaredThrowable"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/UndeclaredThrowableException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UndeclaredThrowableException.getUndeclaredThrowable

```java
public Throwable getUndeclaredThrowable()
```

Returns the `Throwable` instance wrapped in this
 `UndeclaredThrowableException`, which may be `null`.

 This method predates the general-purpose exception chaining facility.
 The `getCause` method is now the preferred means of
 obtaining this information.

**返回**

- the undeclared checked exception that was thrown
