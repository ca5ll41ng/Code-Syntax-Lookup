---
id: "java-en-function-java-util-concurrent-completionservice"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.CompletionService"
title: "CompletionService"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionService

A service that decouples the production of new asynchronous tasks
 from the consumption of the results of completed tasks.  Producers
 `submit` tasks for execution. Consumers `take`
 completed tasks and process their results in the order they
 complete.  A `CompletionService` can for example be used to
 manage asynchronous I/O, in which tasks that perform reads are
 submitted in one part of a program or system, and then acted upon
 in a different part of the program when the reads complete,
 possibly in a different order than they were requested.

 

Typically, a `CompletionService` relies on a separate
 `Executor` to actually execute the tasks, in which case the
 `CompletionService` only manages an internal completion
 queue. The `ExecutorCompletionService` class provides an
 implementation of this approach.

 

Memory consistency effects: Actions in a thread prior to
 submitting a task to a `CompletionService`
 happen-before
 actions taken by that task, which in turn happen-before
 actions following a successful return from the corresponding `take()`.

**参数**

- **the** — type of values the tasks of this service produce and consume

> *Since 1.5*
