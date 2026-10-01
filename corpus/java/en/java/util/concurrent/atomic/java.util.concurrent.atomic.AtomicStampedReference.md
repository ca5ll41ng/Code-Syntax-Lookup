---
id: "java-en-function-java-util-concurrent-atomic-atomicstampedreference"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.AtomicStampedReference"
title: "AtomicStampedReference"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicStampedReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicStampedReference

An `AtomicStampedReference` maintains an object reference
 along with an integer "stamp", that can be updated atomically.

 

Implementation note: This implementation maintains stamped
 references by creating internal objects representing "boxed"
 [reference, integer] pairs.

**参数**

- **The** — type of object referred to by this reference

> *Since 1.5*
