---
id: "java-en-function-java-util-concurrent-concurrentmap"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ConcurrentMap"
title: "ConcurrentMap"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap

A `Map` providing thread safety and atomicity guarantees.

 

To maintain the specified guarantees, default implementations of
 methods including `putIfAbsent` inherited from `Map`
 must be overridden by implementations of this interface. Similarly,
 implementations of the collections returned by methods `keySet`, `values`, and `entrySet` must override
 methods such as `removeIf` when necessary to
 preserve atomicity guarantees.

 

Memory consistency effects: As with other concurrent
 collections, actions in a thread prior to placing an object into a
 `ConcurrentMap` as a key or value
 happen-before
 actions subsequent to the access or removal of that object from
 the `ConcurrentMap` in another thread.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

> *Since 1.5*
