---
id: "java-en-function-namingexception-rootexception"
language: "java"
lang: "en"
category: "function"
name: "NamingException.rootException"
signature: "protected Throwable rootException = null"
title: "NamingException.rootException"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.rootException

```java
protected Throwable rootException = null
```

Contains the original exception that caused this NamingException to
 be thrown. This field is set if there is additional
 information that could be obtained from the original
 exception, or if the original exception could not be
 mapped to a subclass of NamingException.
 Can be null.

 This field predates the general-purpose exception chaining facility.
 The `initCause` and `getCause` methods
 are now the preferred means of accessing this information.

**参见**

- #getRootCause
- #setRootCause(Throwable)
- #initCause(Throwable)
- #getCause
