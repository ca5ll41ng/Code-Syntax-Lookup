---
id: "java-en-function-reference-enqueue"
language: "java"
lang: "en"
category: "function"
name: "Reference.enqueue"
signature: "public boolean enqueue()"
title: "Reference.enqueue"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.enqueue

```java
public boolean enqueue()
```

Clears this reference object, then attempts to add it to the queue with
 which it is registered, if any.

 

If this reference is registered with a queue but not yet enqueued,
 the reference is added to the queue; this method is
 **successful** and returns true.
 If this reference is not registered with a queue, or was already enqueued
 (by the garbage collector, or a previous call to `enqueue`), this
 method is **unsuccessful** and returns false.

 

`#MemoryConsistency Memory consistency effects`:
 Actions in a thread prior to a **successful** call to `enqueue`
 happen-before
 the reference is removed from the queue by `poll`
 or `remove`. **Unsuccessful** calls to
 `enqueue` have no specified memory consistency effects.

 

 When this method clears references it does so directly, without
 invoking the `clear` method. When the garbage collector clears
 and enqueues references it does so directly, without invoking the
 `clear` method or this method.

 Use of this method allows the registered queue's
 `poll` and `remove` methods
 to return this reference even though the referent may still be strongly
 reachable.

**返回**

- `true` if this reference object was successfully enqueued; `false` if it was already enqueued or if it was not registered with a queue when it was created
