---
id: "java-en-function-lock-trylock"
language: "java"
lang: "en"
category: "function"
name: "Lock.tryLock"
signature: "boolean tryLock()"
title: "Lock.tryLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Lock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lock.tryLock

```java
boolean tryLock()
```

Acquires the lock only if it is free at the time of invocation.

 

Acquires the lock if it is available and returns immediately
 with the value `true`.
 If the lock is not available then this method will return
 immediately with the value `false`.

 

A typical usage idiom for this method would be:
 
```
 `Lock lock = ...;
 if (lock.tryLock()) {
   try {
     // manipulate protected state
   ` finally {
     lock.unlock();
   }
 } else {
   // perform alternative actions
 }}
```

 This usage ensures that the lock is unlocked if it was acquired, and
 doesn't try to unlock if the lock was not acquired.

**返回**

- `true` if the lock was acquired and `false` otherwise
