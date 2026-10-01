---
id: "java-en-function-java-util-concurrent-atomic-atomicintegerfieldupdater"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.AtomicIntegerFieldUpdater"
title: "AtomicIntegerFieldUpdater"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater

A reflection-based utility that enables atomic updates to
 designated non-static `volatile int` fields of designated
 classes, providing a subset of the functionality of class `VarHandle` that should be used instead.  This class is designed for
 use in atomic data structures in which several fields of the same
 node are independently subject to atomic updates.

 

Note that the guarantees of the `compareAndSet`
 method in this class are weaker than in other atomic classes.
 Because this class cannot ensure that all uses of the field
 are appropriate for purposes of atomic access, it can
 guarantee atomicity only with respect to other invocations of
 `compareAndSet` and `set` on the same updater.

 

Object arguments for parameters of type `T` that are not
 instances of the class passed to `newUpdater` will result in
 a `ClassCastException` being thrown.

**参数**

- **The** — type of the object holding the updatable field

> *Since 1.5*
