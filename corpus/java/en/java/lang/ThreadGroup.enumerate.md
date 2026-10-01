---
id: "java-en-function-threadgroup-enumerate"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.enumerate"
signature: "public int enumerate(Thread[] list)"
title: "ThreadGroup.enumerate"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.enumerate

```java
public int enumerate(Thread[] list)
```

Copies into the specified array every `isAlive() live`
 platform thread in this thread group and its subgroups. Virtual threads
 are not enumerated by this method.

 

 An invocation of this method behaves in exactly the same
 way as the invocation

 
 `enumerate(Thread[], boolean) enumerate``(list, true)`

**参数**

- **list** — an array into which to put the list of threads

**返回**

- the number of threads put into the array
