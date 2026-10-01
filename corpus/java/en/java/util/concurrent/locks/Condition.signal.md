---
id: "java-en-function-condition-signal"
language: "java"
lang: "en"
category: "function"
name: "Condition.signal"
signature: "void signal()"
title: "Condition.signal"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Condition.signal

```java
void signal()
```

Wakes up one waiting thread.

 

If any threads are waiting on this condition then one
 is selected for waking up. That thread must then re-acquire the
 lock before returning from `await`.

 

**Implementation Considerations**

 

An implementation may (and typically does) require that the
 current thread hold the lock associated with this `Condition` when this method is called. Implementations must
 document this precondition and any actions taken if the lock is
 not held. Typically, an exception such as `IllegalMonitorStateException` will be thrown.
