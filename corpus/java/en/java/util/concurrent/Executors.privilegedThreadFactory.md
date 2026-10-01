---
id: "java-en-function-executors-privilegedthreadfactory"
language: "java"
lang: "en"
category: "function"
name: "Executors.privilegedThreadFactory"
signature: "public static ThreadFactory privilegedThreadFactory()"
title: "Executors.privilegedThreadFactory"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.privilegedThreadFactory

```java
public static ThreadFactory privilegedThreadFactory()
```

Returns a thread factory used to create new threads that have
 the current context class loader as the context class loader.

 This factory creates threads with the same settings as `defaultThreadFactory`, additionally setting the
 contextClassLoader of new threads to
 be the same as the thread invoking this
 `privilegedThreadFactory` method.

 

Note that while tasks running within such threads will have the
 same class loader as the current thread, they need not have the same
 `ThreadLocal` or `InheritableThreadLocal` values. If
 necessary, particular values of thread locals can be set or reset
 before any task runs in `ThreadPoolExecutor` subclasses using
 `beforeExecute`.
 Also, if it is necessary to initialize worker threads to have
 the same InheritableThreadLocal settings as some other
 designated thread, you can create a custom ThreadFactory in
 which that thread waits for and services requests to create
 others that will inherit its values.

**返回**

- a thread factory

> **⚠ Deprecated** — This method originally returned a thread factory that created new threads that had the same access control context as the current thread. Access control contexts were only useful in conjunction with `SecurityManager the Security Manager`, which is no longer supported. There is no replacement for the Security Manager or this method.
