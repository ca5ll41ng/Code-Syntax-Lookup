---
id: "java-en-function-lock-unlock"
language: "java"
lang: "en"
category: "function"
name: "Lock.unlock"
signature: "void unlock()"
title: "Lock.unlock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Lock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lock.unlock

```java
void unlock()
```

Releases the lock.

 

**Implementation Considerations**

 

A `Lock` implementation will usually impose
 restrictions on which thread can release a lock (typically only the
 holder of the lock can release it) and may throw
 an (unchecked) exception if the restriction is violated.
 Any restrictions and the exception
 type must be documented by that `Lock` implementation.
