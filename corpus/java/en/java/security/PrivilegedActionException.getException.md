---
id: "java-en-function-privilegedactionexception-getexception"
language: "java"
lang: "en"
category: "function"
name: "PrivilegedActionException.getException"
signature: "public Exception getException()"
title: "PrivilegedActionException.getException"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivilegedActionException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivilegedActionException.getException

```java
public Exception getException()
```

Returns the exception thrown by the computation that
 resulted in this `PrivilegedActionException`.

 This method predates the general-purpose exception chaining facility.
 The `getCause` method is now the preferred means of
 obtaining this information.

**返回**

- the exception thrown by the computation that resulted in this `PrivilegedActionException`.

**参见**

- PrivilegedExceptionAction
- AccessController#doPrivileged(PrivilegedExceptionAction)
- AccessController#doPrivileged(PrivilegedExceptionAction, AccessControlContext)
