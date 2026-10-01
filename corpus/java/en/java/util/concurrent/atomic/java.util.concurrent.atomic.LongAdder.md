---
id: "java-en-function-java-util-concurrent-atomic-longadder"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.LongAdder"
title: "LongAdder"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAdder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAdder

One or more variables that together maintain an initially zero
 `long` sum.  When updates (method `add`) are contended
 across threads, the set of variables may grow dynamically to reduce
 contention. Method `sum` (or, equivalently, `longValue`) returns the current total combined across the
 variables maintaining the sum.

 

This class is usually preferable to `AtomicLong` when
 multiple threads update a common sum that is used for purposes such
 as collecting statistics, not for fine-grained synchronization
 control.  Under low update contention, the two classes have similar
 characteristics. But under high contention, expected throughput of
 this class is significantly higher, at the expense of higher space
 consumption.

 

LongAdders can be used with a `java.util.concurrent.ConcurrentHashMap` to maintain a scalable
 frequency map (a form of histogram or multiset). For example, to
 add a count to a `ConcurrentHashMap freqs`,
 initializing if not already present, you can use `freqs.computeIfAbsent(key, k -> new LongAdder()).increment();`

 

This class extends `Number`, but does not define
 methods such as `equals`, `hashCode` and `compareTo` because instances are expected to be mutated, and so are
 not useful as collection keys.

> *Since 1.8*
