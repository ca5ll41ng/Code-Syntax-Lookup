---
id: "java-en-function-exceptionininitializererror-getexception"
language: "java"
lang: "en"
category: "function"
name: "ExceptionInInitializerError.getException"
signature: "public Throwable getException()"
title: "ExceptionInInitializerError.getException"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ExceptionInInitializerError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExceptionInInitializerError.getException

```java
public Throwable getException()
```

Returns the exception that occurred during a static initialization that
 caused this error to be created.

 This method predates the general-purpose exception chaining facility.
 The `getCause` method is now the preferred means of
 obtaining this information.

**返回**

- the saved throwable object of this `ExceptionInInitializerError`, or `null` if this `ExceptionInInitializerError` has no saved throwable object.
