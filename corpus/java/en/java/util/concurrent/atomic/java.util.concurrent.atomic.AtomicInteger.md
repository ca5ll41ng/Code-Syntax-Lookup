---
id: "java-en-function-java-util-concurrent-atomic-atomicinteger"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.AtomicInteger"
title: "AtomicInteger"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger

An `int` value that may be updated atomically.  See the
 `VarHandle` specification for descriptions of the properties
 of atomic accesses. An `AtomicInteger` is used in
 applications such as atomically incremented counters, and cannot be
 used as a replacement for an `java.lang.Integer`. However,
 this class does extend `Number` to allow uniform access by
 tools and utilities that deal with numerically-based classes.

> *Since 1.5*
