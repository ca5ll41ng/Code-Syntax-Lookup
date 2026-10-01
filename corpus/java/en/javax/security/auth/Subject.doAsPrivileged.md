---
id: "java-en-function-subject-doasprivileged"
language: "java"
lang: "en"
category: "function"
name: "Subject.doAsPrivileged"
signature: "public static <T> T doAsPrivileged(final Subject subject, final java.security.PrivilegedAction<T> action, final java.security.AccessControlContext acc)"
title: "Subject.doAsPrivileged"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.doAsPrivileged

```java
public static <T> T doAsPrivileged(final Subject subject, final java.security.PrivilegedAction<T> action, final java.security.AccessControlContext acc)
```

Perform work as a particular `Subject`.

 

 This method launches `action` and binds `subject` to
 the period of its execution.

**参数**

- **subject** — the `Subject` that the specified `action` will run as.  This parameter may be `null`.
- **the** — type of the value returned by the PrivilegedAction's `run` method.
- **action** — the code to be run as the specified `Subject`.
- **acc** — ignored

**返回**

- the value returned by the PrivilegedAction's `run` method.

**异常**

- **NullPointerException** — if the `PrivilegedAction` is `null`.

**参见**

- #callAs(Subject, Callable)

> **⚠ Deprecated** — This method originally performed the specified `PrivilegedAction` with privileges enabled and restricted by the specified `AccessControlContext`. Running the action with privileges enabled was only useful in conjunction with `SecurityManager the Security Manager`, which is no longer supported. This method has been changed to ignore the `AccessControlContext` and launch the action as is and bind the subject to the period of its execution. A replacement API named `callAs` has been added which can be used to perform the same work. There is no replacement for the Security Manager.
