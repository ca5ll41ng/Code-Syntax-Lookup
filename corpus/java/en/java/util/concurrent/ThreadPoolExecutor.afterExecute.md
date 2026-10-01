---
id: "java-en-function-threadpoolexecutor-afterexecute"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.afterExecute"
signature: "protected void afterExecute(Runnable r, Throwable t)"
title: "ThreadPoolExecutor.afterExecute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.afterExecute

```java
protected void afterExecute(Runnable r, Throwable t)
```

Method invoked upon completion of execution of the given Runnable.
 This method is invoked by the thread that executed the task. If
 non-null, the Throwable is the uncaught `RuntimeException`
 or `Error` that caused execution to terminate abruptly.

 

This implementation does nothing, but may be customized in
 subclasses. Note: To properly nest multiple overridings, subclasses
 should generally invoke `super.afterExecute` at the
 beginning of this method.

 

**Note:** When actions are enclosed in tasks (such as
 `FutureTask`) either explicitly or via methods such as
 `submit`, these task objects catch and maintain
 computational exceptions, and so they do not cause abrupt
 termination, and the internal exceptions are not
 passed to this method. If you would like to trap both kinds of
 failures in this method, you can further probe for such cases,
 as in this sample subclass that prints either the direct cause
 or the underlying exception if a task has been aborted:

 
```
 `class ExtendedExecutor extends ThreadPoolExecutor {
   // ...
   protected void afterExecute(Runnable r, Throwable t) {
     super.afterExecute(r, t);
     if (t == null
         && r instanceof Future<?>
         && ((Future<?>)r).isDone()) {
       try {
         Object result = ((Future<?>) r).get();
       ` catch (CancellationException ce) {
         t = ce;
       } catch (ExecutionException ee) {
         t = ee.getCause();
       } catch (InterruptedException ie) {
         // ignore/reset
         Thread.currentThread().interrupt();
       }
     }
     if (t != null)
       System.out.println(t);
   }
 }}
```

**参数**

- **r** — the runnable that has completed
- **t** — the exception that caused termination, or null if execution completed normally
