---
id: "java-en-function-reference-isenqueued"
language: "java"
lang: "en"
category: "function"
name: "Reference.isEnqueued"
signature: "public boolean isEnqueued()"
title: "Reference.isEnqueued"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.isEnqueued

```java
public boolean isEnqueued()
```

Tests if this reference object is in its associated queue, if any.
 This method returns `true` only if all of the following conditions
 are met:
 
 
- this reference object was registered with a queue when it was created; and
 
- the garbage collector has added this reference object to the queue
     or `enqueue` is called; and
 
- this reference object is not yet removed from the queue.
 

 Otherwise, this method returns `false`.
 This method may return `false` if this reference object has been cleared
 but not enqueued due to the race condition.

**返回**

- `true` if and only if this reference object is in its associated queue (if any).

> **⚠ Deprecated** — This method was originally specified to test if a reference object has been cleared and enqueued but was never implemented to do this test. This method could be misused due to the inherent race condition or without an associated `ReferenceQueue`. An application relying on this method to release critical resources could cause serious performance issue. An application should use `ReferenceQueue` to reliably determine what reference objects that have been enqueued or `refersTo` to determine if this reference object has been cleared.
