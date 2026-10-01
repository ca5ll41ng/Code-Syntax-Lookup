---
id: "java-en-function-java-util-concurrent-timeunit"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.TimeUnit"
title: "TimeUnit"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit

A `TimeUnit` represents time durations at a given unit of
 granularity and provides utility methods to convert across units,
 and to perform timing and delay operations in these units.  A
 `TimeUnit` does not maintain time information, but only
 helps organize and use time representations that may be maintained
 separately across various contexts.  A nanosecond is defined as one
 thousandth of a microsecond, a microsecond as one thousandth of a
 millisecond, a millisecond as one thousandth of a second, a minute
 as sixty seconds, an hour as sixty minutes, and a day as twenty four
 hours.

 

A `TimeUnit` is mainly used to inform time-based methods
 how a given timing parameter should be interpreted. For example,
 the following code will timeout in 50 milliseconds if the `java.util.concurrent.locks.Lock lock` is not available:

 
```
 `Lock lock = ...;
 if (lock.tryLock(50L, TimeUnit.MILLISECONDS)) ...`
```

 while this code will timeout in 50 seconds:
 
```
 `Lock lock = ...;
 if (lock.tryLock(50L, TimeUnit.SECONDS)) ...`
```

 Note however, that there is no guarantee that a particular timeout
 implementation will be able to notice the passage of time at the
 same granularity as the given `TimeUnit`.

> *Since 1.5*
