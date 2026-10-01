---
id: "java-en-function-atomicstampedreference-attemptstamp"
language: "java"
lang: "en"
category: "function"
name: "AtomicStampedReference.attemptStamp"
signature: "public boolean attemptStamp(V expectedReference, int newStamp)"
title: "AtomicStampedReference.attemptStamp"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicStampedReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicStampedReference.attemptStamp

```java
public boolean attemptStamp(V expectedReference, int newStamp)
```

Atomically sets the value of the stamp to the given update value
 if the current reference is `==` to the expected
 reference.  Any given invocation of this operation may fail
 (return `false`) spuriously, but repeated invocation
 when the current value holds the expected value and no other
 thread is also attempting to set the value will eventually
 succeed.

**参数**

- **expectedReference** — the expected value of the reference
- **newStamp** — the new value for the stamp

**返回**

- `true` if successful
