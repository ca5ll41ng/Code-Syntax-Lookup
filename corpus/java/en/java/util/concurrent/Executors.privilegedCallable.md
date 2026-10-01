---
id: "java-en-function-executors-privilegedcallable"
language: "java"
lang: "en"
category: "function"
name: "Executors.privilegedCallable"
signature: "public static <T> Callable<T> privilegedCallable(Callable<T> callable)"
title: "Executors.privilegedCallable"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.privilegedCallable

```java
public static <T> Callable<T> privilegedCallable(Callable<T> callable)
```

Returns a `Callable` object that will, when called,
 execute the given `callable` and return its result.

**参数**

- **callable** — the underlying task
- **the** — type of the callable's result

**返回**

- a callable object

**异常**

- **NullPointerException** — if callable null

> **⚠ Deprecated** — This method originally returned a `Callable` object that when called, executed the given `callable` under the current access control context. Access control contexts were only useful in conjunction with `SecurityManager the Security Manager`, which is no longer supported. There is no replacement for the Security Manager or this method.
