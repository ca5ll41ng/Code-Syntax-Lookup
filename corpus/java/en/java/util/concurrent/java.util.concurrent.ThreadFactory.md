---
id: "java-en-function-java-util-concurrent-threadfactory"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ThreadFactory"
title: "ThreadFactory"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadFactory

An object that creates new threads on demand.  Using thread factories
 removes hardwiring of calls to `Thread(Runnable) new Thread`,
 enabling applications to use special thread subclasses, priorities, etc.

 

 The simplest implementation of this interface is just:
 
```
 `class SimpleThreadFactory implements ThreadFactory {
   public Thread newThread(Runnable r) {
     return new Thread(r);
   `
 }}
```

 The `defaultThreadFactory` method provides a more
 useful simple implementation, that sets the created thread context
 to known values before returning it.

**参见**

- Thread.Builder#factory()

> *Since 1.5*
