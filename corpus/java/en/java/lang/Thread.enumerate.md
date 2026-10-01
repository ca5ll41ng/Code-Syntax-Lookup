---
id: "java-en-function-thread-enumerate"
language: "java"
lang: "en"
category: "function"
name: "Thread.enumerate"
signature: "public static int enumerate(Thread[] tarray)"
title: "Thread.enumerate"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.enumerate

```java
public static int enumerate(Thread[] tarray)
```

Copies into the specified array every `isAlive() live`
 platform thread in the current thread's thread group and its subgroups.
 This method simply invokes the `enumerate`
 method of the current thread's thread group. Virtual threads are
 not enumerated by this method.

 

 An application might use the `activeCount activeCount`
 method to get an estimate of how big the array should be, however
 if the array is too short to hold all the threads, the extra threads
 are silently ignored.  If it is critical to obtain every live
 thread in the current thread's thread group and its subgroups, the
 invoker should verify that the returned int value is strictly less
 than the length of `tarray`.

 

 Due to the inherent race condition in this method, it is recommended
 that the method only be used for debugging and monitoring purposes.

**参数**

- **tarray** — an array into which to put the list of threads

**返回**

- the number of threads put into the array
