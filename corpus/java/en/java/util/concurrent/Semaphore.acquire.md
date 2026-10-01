---
id: "java-en-function-semaphore-acquire"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.acquire"
signature: "public void acquire() throws InterruptedException"
title: "Semaphore.acquire"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.acquire

```java
public void acquire() throws InterruptedException
```

Acquires a permit from this semaphore, blocking until one is
 available, or the thread is `interrupt interrupted`.

 

Acquires a permit, if one is available and returns immediately,
 reducing the number of available permits by one.

 

If no permit is available then the current thread becomes
 disabled for thread scheduling purposes and lies dormant until
 one of two things happens:
 
 
- Some other thread invokes the `release` method for this
 semaphore and the current thread is next to be assigned a permit; or
 
- Some other thread `interrupt interrupts`
 the current thread.
 

 

If the current thread:
 
 
- has its interrupted status set on entry to this method; or
 
- is `interrupt interrupted` while waiting
 for a permit,
 

 then `InterruptedException` is thrown and the current thread's
 interrupted status is cleared.

**异常**

- **InterruptedException** — if the current thread is interrupted
