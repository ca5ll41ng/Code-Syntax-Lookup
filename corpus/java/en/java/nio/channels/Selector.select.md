---
id: "java-en-function-selector-select"
language: "java"
lang: "en"
category: "function"
name: "Selector.select"
signature: "public abstract int select(long timeout) throws IOException"
title: "Selector.select"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.select

```java
public abstract int select(long timeout) throws IOException
```

Selects a set of keys whose corresponding channels are ready for I/O
 operations.

 

 This method performs a blocking selection
 operation.  It returns only after at least one channel is selected,
 this selector's `wakeup wakeup` method is invoked, the current
 thread is interrupted, or the given timeout period expires, whichever
 comes first.

 

 This method does not offer real-time guarantees: It schedules the
 timeout as if by invoking the `wait` method.

**参数**

- **timeout** — If positive, block for up to `timeout` milliseconds, more or less, while waiting for a channel to become ready; if zero, block indefinitely; must not be negative

**返回**

- The number of keys, possibly zero, whose ready-operation sets now indicate readiness for at least one category of operations for which the channel was not previously detected to be ready

**异常**

- **IOException** — If an I/O error occurs
- **ClosedSelectorException** — If this selector is closed
- **IllegalArgumentException** — If the value of the timeout argument is negative
