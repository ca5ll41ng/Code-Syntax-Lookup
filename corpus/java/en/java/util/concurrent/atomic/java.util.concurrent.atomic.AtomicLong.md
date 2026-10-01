---
id: "java-en-function-java-util-concurrent-atomic-atomiclong"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.AtomicLong"
title: "AtomicLong"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong

A `long` value that may be updated atomically.  See the
 `VarHandle` specification for descriptions of the properties
 of atomic accesses. An `AtomicLong` is used in applications
 such as atomically incremented sequence numbers, and cannot be used
 as a replacement for a `java.lang.Long`. However, this class
 does extend `Number` to allow uniform access by tools and
 utilities that deal with numerically-based classes.

> *Since 1.5*
