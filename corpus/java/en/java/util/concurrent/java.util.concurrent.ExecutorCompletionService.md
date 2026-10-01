---
id: "java-en-function-java-util-concurrent-executorcompletionservice"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ExecutorCompletionService"
title: "ExecutorCompletionService"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorCompletionService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorCompletionService

A `CompletionService` that uses a supplied `Executor`
 to execute tasks.  This class arranges that submitted tasks are,
 upon completion, placed on a queue accessible using `take`.
 The class is lightweight enough to be suitable for transient use
 when processing groups of tasks.

 

 **Usage Examples.**

 Suppose you have a set of solvers for a certain problem, each
 returning a value of some type `Result`, and would like to
 run them concurrently, processing the results of each of them that
 return a non-null value, in some method `use(Result r)`. You
 could write this as:

 
```
 `void solve(Executor e,
            Collection> solvers)
     throws InterruptedException, ExecutionException {
   CompletionService cs
       = new ExecutorCompletionService<>(e);
   solvers.forEach(cs::submit);
   for (int i = solvers.size(); i > 0; i--) {
     Result r = cs.take().get();
     if (r != null)
       use(r);
   `
 }}
```

 Suppose instead that you would like to use the first non-null result
 of the set of tasks, ignoring any that encounter exceptions,
 and cancelling all other tasks when the first one is ready:

 
```
 `void solve(Executor e,
            Collection> solvers)
     throws InterruptedException {
   CompletionService cs
       = new ExecutorCompletionService<>(e);
   int n = solvers.size();
   List> futures = new ArrayList<>(n);
   Result result = null;
   try {
     solvers.forEach(solver -> futures.add(cs.submit(solver)));
     for (int i = n; i > 0; i--) {
       try {
         Result r = cs.take().get();
         if (r != null) {
           result = r;
           break;
         `
       } catch (ExecutionException ignore) {}
     }
   } finally {
     futures.forEach(future -> future.cancel(true));
   }

   if (result != null)
     use(result);
 }}
```

**参数**

- **the** — type of values the tasks of this service produce and consume

> *Since 1.5*
