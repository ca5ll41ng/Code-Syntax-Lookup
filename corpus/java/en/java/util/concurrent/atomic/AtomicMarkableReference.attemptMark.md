---
id: "java-en-function-atomicmarkablereference-attemptmark"
language: "java"
lang: "en"
category: "function"
name: "AtomicMarkableReference.attemptMark"
signature: "public boolean attemptMark(V expectedReference, boolean newMark)"
title: "AtomicMarkableReference.attemptMark"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicMarkableReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicMarkableReference.attemptMark

```java
public boolean attemptMark(V expectedReference, boolean newMark)
```

Atomically sets the value of the mark to the given update value
 if the current reference is `==` to the expected
 reference.  Any given invocation of this operation may fail
 (return `false`) spuriously, but repeated invocation
 when the current value holds the expected value and no other
 thread is also attempting to set the value will eventually
 succeed.

**参数**

- **expectedReference** — the expected value of the reference
- **newMark** — the new value for the mark

**返回**

- `true` if successful
