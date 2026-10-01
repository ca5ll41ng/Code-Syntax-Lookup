---
id: "java-en-function-condition-signalall"
language: "java"
lang: "en"
category: "function"
name: "Condition.signalAll"
signature: "void signalAll()"
title: "Condition.signalAll"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Condition.signalAll

```java
void signalAll()
```

Wakes up all waiting threads.

 

If any threads are waiting on this condition then they are
 all woken up. Each thread must re-acquire the lock before it can
 return from `await`.

 

**Implementation Considerations**

 

An implementation may (and typically does) require that the
 current thread hold the lock associated with this `Condition` when this method is called. Implementations must
 document this precondition and any actions taken if the lock is
 not held. Typically, an exception such as `IllegalMonitorStateException` will be thrown.
