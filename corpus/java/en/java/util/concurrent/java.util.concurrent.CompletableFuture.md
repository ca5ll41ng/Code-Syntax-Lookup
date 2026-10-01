---
id: "java-en-function-java-util-concurrent-completablefuture"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.CompletableFuture"
title: "CompletableFuture"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture

A `Future` that may be explicitly completed (setting its
 value and status), and may be used as a `CompletionStage`,
 supporting dependent functions and actions that trigger upon its
 completion.

 

When two or more threads attempt to
 `complete complete`,
 `completeExceptionally completeExceptionally`, or
 `cancel cancel`
 a CompletableFuture, only one of them succeeds.

 

In addition to these and related methods for directly
 manipulating status and results, CompletableFuture implements
 interface `CompletionStage` with the following policies: 

 
- Actions supplied for dependent completions of
 non-async methods may be performed by the thread that
 completes the current CompletableFuture, or by any other caller of
 a completion method.

 
- All async methods without an explicit Executor
 argument, as well as those involving delays are performed using the
 `commonPool`.  The default async Executor may
 be overridden for non-static methods in subclasses by defining
 method `defaultExecutor`. To simplify monitoring,
 debugging, and tracking, all generated asynchronous tasks are
 instances of the marker interface `AsynchronousCompletionTask`.  Operations with time-delays can use
 adapter methods defined in this class, for example: `supplyAsync(supplier, delayedExecutor(timeout, timeUnit))`.

 
- All CompletionStage methods are implemented independently of
 other public methods, so the behavior of one method is not impacted
 by overrides of others in subclasses.

 
- All CompletionStage methods return CompletableFutures.  To
 restrict usages to only those methods defined in interface
 CompletionStage, use method `minimalCompletionStage`. Or to
 ensure only that clients do not themselves modify a future, use
 method `copy`.
 

 

CompletableFuture also implements `Future` with the following
 policies: 

 
- Since (unlike `FutureTask`) this class has no direct
 control over the computation that causes it to be completed,
 cancellation is treated as just another form of exceptional
 completion.  Method `cancel cancel` has the same effect as
 `completeExceptionally(new CancellationException())`. Method
 `isCompletedExceptionally` can be used to determine if a
 CompletableFuture completed in any exceptional fashion.

 
- In case of exceptional completion with a CompletionException,
 methods `get` and `get` throw an
 `ExecutionException` with the same cause as held in the
 corresponding CompletionException.  To simplify usage in most
 contexts, this class also defines methods `join` and
 `getNow` that instead throw the CompletionException directly
 in these cases.
 

 

Arguments used to pass a completion result (that is, for
 parameters of type `T`) for methods accepting them may be
 null, but passing a null value for any other parameter will result
 in a `NullPointerException` being thrown.

 

Subclasses of this class should normally override the "virtual
 constructor" method `newIncompleteFuture`, which establishes
 the concrete type returned by CompletionStage methods. For example,
 here is a class that substitutes a different default Executor and
 disables the `obtrude` methods:

 
```
 `class MyCompletableFuture extends CompletableFuture {
   static final Executor myExecutor = ...;
   public MyCompletableFuture() { `
   public  CompletableFuture newIncompleteFuture() {
     return new MyCompletableFuture(); }
   public Executor defaultExecutor() {
     return myExecutor; }
   public void obtrudeValue(T value) {
     throw new UnsupportedOperationException(); }
   public void obtrudeException(Throwable ex) {
     throw new UnsupportedOperationException(); }
 }}
```

**参数**

- **The** — result type returned by this future's `join` and `get` methods

> *Since 1.8*
