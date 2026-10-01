---
id: "java-en-function-privilegedexceptionaction-run"
language: "java"
lang: "en"
category: "function"
name: "PrivilegedExceptionAction.run"
signature: "T run() throws Exception"
title: "PrivilegedExceptionAction.run"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivilegedExceptionAction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivilegedExceptionAction.run

```java
T run() throws Exception
```

Performs the computation.  This method will be called by
 `AccessController.doPrivileged`.

**返回**

- a class-dependent value that may represent the results of the computation.  Each class that implements `PrivilegedExceptionAction` should document what (if anything) this value represents.

**异常**

- **Exception** — an exceptional condition has occurred.  Each class that implements `PrivilegedExceptionAction` should document the exceptions that its run method can throw.

**参见**

- AccessController#doPrivileged(PrivilegedExceptionAction)
- AccessController#doPrivileged(PrivilegedExceptionAction,AccessControlContext)
