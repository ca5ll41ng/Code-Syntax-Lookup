---
id: "java-en-function-java-lang-ref-referencequeue"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ref.ReferenceQueue"
title: "ReferenceQueue"
directive: "type"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/ReferenceQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferenceQueue

Reference queues, to which registered reference objects are appended by the
 garbage collector after the appropriate reachability changes are detected.

 

`#MemoryConsistency Memory consistency effects`:
 The enqueueing of a reference to a queue (by the garbage collector, or by a
 successful call to `enqueue`)
 happens-before
 the reference is removed from the queue by `poll` or
 `remove`.

**参数**

- **the** — type of the reference object

> *Since 1.2*
