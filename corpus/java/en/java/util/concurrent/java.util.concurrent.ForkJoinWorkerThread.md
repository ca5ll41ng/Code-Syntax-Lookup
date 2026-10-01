---
id: "java-en-function-java-util-concurrent-forkjoinworkerthread"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ForkJoinWorkerThread"
title: "ForkJoinWorkerThread"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinWorkerThread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinWorkerThread

A thread managed by a `ForkJoinPool`, which executes
 `ForkJoinTask`s.
 This class is subclassable solely for the sake of adding
 functionality -- there are no overridable methods dealing with
 scheduling or execution.  However, you can override initialization
 and termination methods surrounding the main task processing loop.
 If you do create such a subclass, you will also need to supply a
 custom `ForkJoinPool.ForkJoinWorkerThreadFactory` to
 `ForkJoinPool(int, ForkJoinWorkerThreadFactory,
 UncaughtExceptionHandler, boolean, int, int, int, Predicate, long, TimeUnit)
 use it` in a `ForkJoinPool`.

> *Since 1.7*
