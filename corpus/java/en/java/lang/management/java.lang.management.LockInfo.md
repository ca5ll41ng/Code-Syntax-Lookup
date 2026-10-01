---
id: "java-en-function-java-lang-management-lockinfo"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.LockInfo"
title: "LockInfo"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/LockInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockInfo

Information about a lock.  A lock can be a built-in object monitor,
 an ownable synchronizer, or the `Condition Condition`
 object associated with synchronizers.
 

 An ownable synchronizer is
 a synchronizer that may be exclusively owned by a thread and uses
 `AbstractOwnableSynchronizer AbstractOwnableSynchronizer`
 (or its subclass) to implement its synchronization property.
 `ReentrantLock ReentrantLock` and the write-lock (but not
 the read-lock) of `ReentrantReadWriteLock ReentrantReadWriteLock` are
 two examples of ownable synchronizers provided by the platform.

 MXBean Mapping
 `LockInfo` is mapped to a `CompositeData CompositeData`
 as specified in the `from from` method.

**参见**

- java.util.concurrent.locks.AbstractOwnableSynchronizer
- java.util.concurrent.locks.Condition

> *Since 1.6*
