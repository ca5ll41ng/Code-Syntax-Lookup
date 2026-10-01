---
id: "java-en-function-java-util-concurrent-locks-abstractqueuedlongsynchronizer"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.locks.AbstractQueuedLongSynchronizer"
title: "AbstractQueuedLongSynchronizer"
directive: "type"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer

A version of `AbstractQueuedSynchronizer` in
 which synchronization state is maintained as a `long`.
 This class has exactly the same structure, properties, and methods
 as `AbstractQueuedSynchronizer` with the exception
 that all state-related parameters and results are defined
 as `long` rather than `int`. This class
 may be useful when creating synchronizers such as
 multilevel locks and barriers that require
 64 bits of state.

 

See `AbstractQueuedSynchronizer` for usage
 notes and examples.

> *Since 1.6*
