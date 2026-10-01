---
id: "java-en-function-classnotfoundexception-getexception"
language: "java"
lang: "en"
category: "function"
name: "ClassNotFoundException.getException"
signature: "public Throwable getException()"
title: "ClassNotFoundException.getException"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassNotFoundException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassNotFoundException.getException

```java
public Throwable getException()
```

Returns the exception that was raised if an error occurred while
 attempting to load the class. Otherwise, returns `null`.

 This method predates the general-purpose exception chaining facility.
 The `getCause` method is now the preferred means of
 obtaining this information.

**返回**

- the `Exception` that was raised while loading a class

> *Since 1.2*
