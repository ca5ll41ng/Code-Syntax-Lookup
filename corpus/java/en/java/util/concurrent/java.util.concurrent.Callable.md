---
id: "java-en-function-java-util-concurrent-callable"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.Callable"
title: "Callable"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Callable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Callable

A task that returns a result and may throw an exception.
 Implementors define a single method with no arguments called
 `call`.

 

The `Callable` interface is similar to `java.lang.Runnable`, in that both are designed for classes whose
 instances are potentially executed by another thread.  A
 `Runnable`, however, does not return a result and cannot
 throw a checked exception.

 

The `Executors` class contains utility methods to
 convert from other common forms to `Callable` classes.

**参数**

- **the** — result type of method `call`

**参见**

- Executor

> *Since 1.5*
