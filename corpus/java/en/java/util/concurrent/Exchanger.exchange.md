---
id: "java-en-function-exchanger-exchange"
language: "java"
lang: "en"
category: "function"
name: "Exchanger.exchange"
signature: "public V exchange(V x) throws InterruptedException"
title: "Exchanger.exchange"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Exchanger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Exchanger.exchange

```java
public V exchange(V x) throws InterruptedException
```

Waits for another thread to arrive at this exchange point (unless
 the current thread is `interrupt interrupted`),
 and then transfers the given object to it, receiving its object
 in return.

 

If another thread is already waiting at the exchange point then
 it is resumed for thread scheduling purposes and receives the object
 passed in by the current thread.  The current thread returns immediately,
 receiving the object passed to the exchange by that other thread.

 

If no other thread is already waiting at the exchange then the
 current thread is disabled for thread scheduling purposes and lies
 dormant until one of two things happens:
 
 
- Some other thread enters the exchange; or
 
- Some other thread `interrupt interrupts`
 the current thread.
 

 

If the current thread:
 
 
- has its interrupted status set on entry to this method; or
 
- is `interrupt interrupted` while waiting
 for the exchange,
 

 then `InterruptedException` is thrown and the current thread's
 interrupted status is cleared.

**参数**

- **x** — the object to exchange

**返回**

- the object provided by the other thread

**异常**

- **InterruptedException** — if the current thread was interrupted while waiting
