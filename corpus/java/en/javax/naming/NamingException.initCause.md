---
id: "java-en-function-namingexception-initcause"
language: "java"
lang: "en"
category: "function"
name: "NamingException.initCause"
signature: "public Throwable initCause(Throwable cause)"
title: "NamingException.initCause"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.initCause

```java
public Throwable initCause(Throwable cause)
```

Initializes the cause of this exception to the specified value.
 The cause is the throwable that caused this naming exception to be
 thrown.

 This method may be called at most once.

**参数**

- **cause** — the cause, which is saved for later retrieval by the `getCause` method.  A `null` value indicates that the cause is nonexistent or unknown.

**返回**

- a reference to this `NamingException` instance.

**异常**

- **IllegalArgumentException** — if `cause` is this exception.  (A throwable cannot be its own cause.)
- **IllegalStateException** — if this method has already been called on this exception.

**参见**

- #getCause

> *Since 1.4*
