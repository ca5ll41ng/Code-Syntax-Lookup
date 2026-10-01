---
id: "java-en-function-privilegedaction-run"
language: "java"
lang: "en"
category: "function"
name: "PrivilegedAction.run"
signature: "T run()"
title: "PrivilegedAction.run"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivilegedAction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivilegedAction.run

```java
T run()
```

Performs the computation.  This method will be called by
 `AccessController.doPrivileged`.

**返回**

- a class-dependent value that may represent the results of the computation. Each class that implements `PrivilegedAction` should document what (if anything) this value represents.

**参见**

- AccessController#doPrivileged(PrivilegedAction)
- AccessController#doPrivileged(PrivilegedAction, AccessControlContext)
