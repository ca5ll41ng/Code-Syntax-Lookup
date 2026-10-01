---
id: "java-en-function-atomicmarkablereference-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicMarkableReference.compareAndSet"
signature: "public boolean compareAndSet(V expectedReference, V newReference, boolean expectedMark, boolean newMark)"
title: "AtomicMarkableReference.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicMarkableReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicMarkableReference.compareAndSet

```java
public boolean compareAndSet(V expectedReference, V newReference, boolean expectedMark, boolean newMark)
```

Atomically sets the value of both the reference and mark
 to the given update values if the
 current reference is `==` to the expected reference
 and the current mark is equal to the expected mark.

**参数**

- **expectedReference** — the expected value of the reference
- **newReference** — the new value for the reference
- **expectedMark** — the expected value of the mark
- **newMark** — the new value for the mark

**返回**

- `true` if successful
