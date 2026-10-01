---
id: "java-en-function-reentrantlock-isheldbycurrentthread"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.isHeldByCurrentThread"
signature: "public boolean isHeldByCurrentThread()"
title: "ReentrantLock.isHeldByCurrentThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.isHeldByCurrentThread

```java
public boolean isHeldByCurrentThread()
```

Queries if this lock is held by the current thread.

 

Analogous to the `holdsLock` method for
 built-in monitor locks, this method is typically used for
 debugging and testing. For example, a method that should only be
 called while a lock is held can assert that this is the case:

 
```
 `class X {
   final ReentrantLock lock = new ReentrantLock();
   // ...

   public void m() {
       assert lock.isHeldByCurrentThread();
       // ... method body
   `
 }}
```

 

It can also be used to ensure that a reentrant lock is used
 in a non-reentrant manner, for example:

 
```
 `class X {
   final ReentrantLock lock = new ReentrantLock();
   // ...

   public void m() {
       assert !lock.isHeldByCurrentThread();
       lock.lock();
       try {
           // ... method body
       ` finally {
           lock.unlock();
       }
   }
 }}
```

**返回**

- `true` if current thread holds this lock and `false` otherwise
