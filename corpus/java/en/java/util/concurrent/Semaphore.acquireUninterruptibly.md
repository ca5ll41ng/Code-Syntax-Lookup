---
id: "java-en-function-semaphore-acquireuninterruptibly"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.acquireUninterruptibly"
signature: "public void acquireUninterruptibly()"
title: "Semaphore.acquireUninterruptibly"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.acquireUninterruptibly

```java
public void acquireUninterruptibly()
```

Acquires a permit from this semaphore, blocking until one is
 available.

 

Acquires a permit, if one is available and returns immediately,
 reducing the number of available permits by one.

 

If no permit is available then the current thread becomes
 disabled for thread scheduling purposes and lies dormant until
 some other thread invokes the `release` method for this
 semaphore and the current thread is next to be assigned a permit.

 

If the current thread is `interrupt interrupted`
 while waiting for a permit then it will continue to wait, but the
 time at which the thread is assigned a permit may change compared to
 the time it would have received the permit had no interruption
 occurred.  When the thread does return from this method its interrupted
 status will be set.
