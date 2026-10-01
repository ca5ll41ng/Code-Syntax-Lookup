---
id: "java-en-function-accesscontroller-doprivilegedwithcombiner"
language: "java"
lang: "en"
category: "function"
name: "AccessController.doPrivilegedWithCombiner"
signature: "public static <T> T doPrivilegedWithCombiner(PrivilegedAction<T> action)"
title: "AccessController.doPrivilegedWithCombiner"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AccessController.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessController.doPrivilegedWithCombiner

```java
public static <T> T doPrivilegedWithCombiner(PrivilegedAction<T> action)
```

Performs the specified action.

 

 If the action's `run` method throws an (unchecked)
 exception, it will propagate through this method.

     `PrivilegedAction` with privileges enabled and with the current
     access control context's domain combiner preserved. Running the
     action with privileges enabled was only useful in conjunction with
     `SecurityManager the Security Manager`, which is no
     longer supported. This method has been changed to run the action as
     is, and has equivalent behavior as if there were no Security Manager
     enabled. There is no replacement for the Security Manager or this
     method.

**参数**

- **the** — type of the value returned by the PrivilegedAction's `run` method
- **action** — the action to be performed

**返回**

- the value returned by the action's `run` method

**异常**

- **NullPointerException** — if the action is `null`

> *Since 1.6*
