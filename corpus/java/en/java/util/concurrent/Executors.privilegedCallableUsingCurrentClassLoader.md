---
id: "java-en-function-executors-privilegedcallableusingcurrentclassloader"
language: "java"
lang: "en"
category: "function"
name: "Executors.privilegedCallableUsingCurrentClassLoader"
signature: "public static <T> Callable<T> privilegedCallableUsingCurrentClassLoader(Callable<T> callable)"
title: "Executors.privilegedCallableUsingCurrentClassLoader"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.privilegedCallableUsingCurrentClassLoader

```java
public static <T> Callable<T> privilegedCallableUsingCurrentClassLoader(Callable<T> callable)
```

Returns a `Callable` object that will, when called,
 execute the given `callable` with the current context
 class loader as the context class loader.

**参数**

- **callable** — the underlying task
- **the** — type of the callable's result

**返回**

- a callable object

**异常**

- **NullPointerException** — if callable null

> **⚠ Deprecated** — This method originally returned a `Callable` object that when called, executed the given `callable` under the current access control context, with the current context class loader as the context class loader. Access control contexts were only useful in conjunction with `SecurityManager the Security Manager`, which is no longer supported. There is no replacement for the Security Manager or this method.
