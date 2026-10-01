---
id: "java-en-function-namingexception-getrootcause"
language: "java"
lang: "en"
category: "function"
name: "NamingException.getRootCause"
signature: "public Throwable getRootCause()"
title: "NamingException.getRootCause"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.getRootCause

```java
public Throwable getRootCause()
```

Retrieves the root cause of this NamingException, if any.
 The root cause of a naming exception is used when the service provider
 wants to indicate to the caller a non-naming related exception
 but at the same time wants to use the NamingException structure
 to indicate how far the naming operation proceeded.

 This method predates the general-purpose exception chaining facility.
 The `getCause` method is now the preferred means of obtaining
 this information.

**返回**

- The possibly null exception that caused this naming exception. If null, it means no root cause has been set for this naming exception.

**参见**

- #setRootCause
- #rootException
- #getCause
