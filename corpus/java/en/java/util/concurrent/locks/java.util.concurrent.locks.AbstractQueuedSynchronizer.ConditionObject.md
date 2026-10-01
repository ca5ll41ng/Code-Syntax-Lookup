---
id: "java-en-function-java-util-concurrent-locks-abstractqueuedsynchronizer-conditionobject"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.locks.AbstractQueuedSynchronizer.ConditionObject"
title: "ConditionObject"
directive: "type"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject

Condition implementation for a `AbstractQueuedSynchronizer`
 serving as the basis of a `Lock` implementation.

 

Method documentation for this class describes mechanics,
 not behavioral specifications from the point of view of Lock
 and Condition users. Exported versions of this class will in
 general need to be accompanied by documentation describing
 condition semantics that rely on those of the associated
 `AbstractQueuedSynchronizer`.

 

This class is Serializable, but all fields are transient,
 so deserialized conditions have no waiters.
