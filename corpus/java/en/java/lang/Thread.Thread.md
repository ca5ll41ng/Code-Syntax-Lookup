---
id: "java-en-function-thread-thread"
language: "java"
lang: "en"
category: "function"
name: "Thread.Thread"
signature: "public Thread()"
title: "Thread.Thread"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.Thread

```java
public Thread()
```

Initializes a new platform `Thread`. This constructor has the same
 effect as `Thread(ThreadGroup,Runnable,String) Thread`
 `(null, null, gname)`, where `gname` is a newly generated
 name. Automatically generated names are of the form
 `"Thread-"+`n, where n is an integer.

 

 This constructor is only useful when extending `Thread` to
 override the `run` method.

**参见**

- Inheritance when creating threads
