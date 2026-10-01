---
id: "java-en-function-namingexception-setrootcause"
language: "java"
lang: "en"
category: "function"
name: "NamingException.setRootCause"
signature: "public void setRootCause(Throwable e)"
title: "NamingException.setRootCause"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.setRootCause

```java
public void setRootCause(Throwable e)
```

Records the root cause of this NamingException.
 If `e` is `this`, this method does not do anything.

 This method predates the general-purpose exception chaining facility.
 The `initCause` method is now the preferred means
 of recording this information.

**参数**

- **e** — The possibly null exception that caused the naming operation to fail. If null, it means this naming exception has no root cause.

**参见**

- #getRootCause
- #rootException
- #initCause
