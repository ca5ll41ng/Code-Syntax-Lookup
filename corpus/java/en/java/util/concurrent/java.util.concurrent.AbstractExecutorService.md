---
id: "java-en-function-java-util-concurrent-abstractexecutorservice"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.AbstractExecutorService"
title: "AbstractExecutorService"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/AbstractExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractExecutorService

Provides default implementations of `ExecutorService` methods
 other than `execute`. This class implements the `submit`, `invokeAny` and `invokeAll` methods using a
 `RunnableFuture` returned by `newTaskFor`, which
 defaults to the `FutureTask` class provided in this package.
 For example, the implementation of `submit(Runnable)` creates
 an associated `RunnableFuture` that is executed and
 returned. Subclasses may override the `newTaskFor` methods to
 return `RunnableFuture` implementations other than `FutureTask`.

 

**Extension example.** Here is a sketch of a class
 that customizes `ThreadPoolExecutor` to use
 a `CustomTask` class instead of the default `FutureTask`:
 
```
 `public class CustomThreadPoolExecutor extends ThreadPoolExecutor {

   static class CustomTask implements RunnableFuture { ... `

   protected  RunnableFuture newTaskFor(Callable c) {
       return new CustomTask(c);
   }
   protected  RunnableFuture newTaskFor(Runnable r, V v) {
       return new CustomTask(r, v);
   }
   // ... add constructors, etc.
 }}
```

> *Since 1.5*
