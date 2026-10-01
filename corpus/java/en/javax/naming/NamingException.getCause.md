---
id: "java-en-function-namingexception-getcause"
language: "java"
lang: "en"
category: "function"
name: "NamingException.getCause"
signature: "public Throwable getCause()"
title: "NamingException.getCause"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.getCause

```java
public Throwable getCause()
```

Returns the cause of this exception.  The cause is the
 throwable that caused this naming exception to be thrown.
 Returns `null` if the cause is nonexistent or
 unknown.

**返回**

- the cause of this exception, or `null` if the cause is nonexistent or unknown.

**参见**

- #initCause(Throwable)

> *Since 1.4*
