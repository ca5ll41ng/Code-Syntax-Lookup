---
id: "java-en-function-java-util-concurrent-atomic-longaccumulator"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.LongAccumulator"
title: "LongAccumulator"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAccumulator

One or more variables that together maintain a running `long`
 value updated using a supplied function.  When updates (method
 `accumulate`) are contended across threads, the set of variables
 may grow dynamically to reduce contention.  Method `get`
 (or, equivalently, `longValue`) returns the current value
 across the variables maintaining updates.

 

This class is usually preferable to `AtomicLong` when
 multiple threads update a common value that is used for purposes such
 as collecting statistics, not for fine-grained synchronization
 control.  Under low update contention, the two classes have similar
 characteristics. But under high contention, expected throughput of
 this class is significantly higher, at the expense of higher space
 consumption.

 

The order of accumulation within or across threads is not
 guaranteed and cannot be depended upon, so this class is only
 applicable to functions for which the order of accumulation does
 not matter. The supplied accumulator function should be
 side-effect-free, since it may be re-applied when attempted updates
 fail due to contention among threads. For predictable results, the
 accumulator function should be associative and commutative. The
 function is applied with an existing value (or identity) as one
 argument, and a given update as the other argument.  For example,
 to maintain a running maximum value, you could supply `Long::max` along with `Long.MIN_VALUE` as the identity.

 

Class `LongAdder` provides analogs of the functionality of
 this class for the common special case of maintaining counts and
 sums.  The call `new LongAdder()` is equivalent to `new
 LongAccumulator((x, y) -> x + y, 0L)`.

 

This class extends `Number`, but does not define
 methods such as `equals`, `hashCode` and `compareTo` because instances are expected to be mutated, and so are
 not useful as collection keys.

> *Since 1.8*
