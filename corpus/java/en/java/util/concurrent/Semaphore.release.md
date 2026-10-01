---
id: "java-en-function-semaphore-release"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.release"
signature: "public void release()"
title: "Semaphore.release"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.release

```java
public void release()
```

Releases a permit, returning it to the semaphore.

 

Releases a permit, increasing the number of available permits by
 one.  If any threads are trying to acquire a permit, then one is
 selected and given the permit that was just released.  That thread
 is (re)enabled for thread scheduling purposes.

 

There is no requirement that a thread that releases a permit must
 have acquired that permit by calling `acquire`.
 Correct usage of a semaphore is established by programming convention
 in the application.
