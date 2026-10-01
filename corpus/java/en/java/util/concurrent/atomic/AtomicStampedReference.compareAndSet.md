---
id: "java-en-function-atomicstampedreference-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicStampedReference.compareAndSet"
signature: "public boolean compareAndSet(V expectedReference, V newReference, int expectedStamp, int newStamp)"
title: "AtomicStampedReference.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicStampedReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicStampedReference.compareAndSet

```java
public boolean compareAndSet(V expectedReference, V newReference, int expectedStamp, int newStamp)
```

Atomically sets the value of both the reference and stamp
 to the given update values if the
 current reference is `==` to the expected reference
 and the current stamp is equal to the expected stamp.

**参数**

- **expectedReference** — the expected value of the reference
- **newReference** — the new value for the reference
- **expectedStamp** — the expected value of the stamp
- **newStamp** — the new value for the stamp

**返回**

- `true` if successful
