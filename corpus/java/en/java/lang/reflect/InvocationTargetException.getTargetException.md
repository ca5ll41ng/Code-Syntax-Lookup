---
id: "java-en-function-invocationtargetexception-gettargetexception"
language: "java"
lang: "en"
category: "function"
name: "InvocationTargetException.getTargetException"
signature: "public Throwable getTargetException()"
title: "InvocationTargetException.getTargetException"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/InvocationTargetException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvocationTargetException.getTargetException

```java
public Throwable getTargetException()
```

Get the thrown target exception.

 This method predates the general-purpose exception chaining facility.
 The `getCause` method is now the preferred means of
 obtaining this information.

**返回**

- the thrown target exception (cause of this exception).
