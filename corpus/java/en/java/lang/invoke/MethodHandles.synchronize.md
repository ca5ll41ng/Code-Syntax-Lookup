---
id: "java-en-function-methodhandles-synchronize"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.synchronize"
signature: "public static MethodHandle synchronize(MethodHandle body)"
title: "MethodHandles.synchronize"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.synchronize

```java
public static MethodHandle synchronize(MethodHandle body)
```

Creates a synchronizing method handle that executes the given `body`
 handle while synchronizing on a lock object passed as the first argument.
 

 The returned method handle behaves similar to the following notional code:
 {@snippet lang="java" :
 R adapter(Object lock, A... a) {
     synchronized (lock) {
         return body.invokeExact(a...);
     }
 }
 }
 

 The returned method handle will throw an `IdentityException` if the object
 passed as the lock object is not an `hasIdentity(Object) identity object`.
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original body method handle was.

**参数**

- **body** — body of the synchronized block

**返回**

- the synchronizing method handle

**异常**

- **NullPointerException** — if `body` is `null`.

> *Since 28*
