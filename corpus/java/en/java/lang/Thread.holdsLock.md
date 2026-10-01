---
id: "java-en-function-thread-holdslock"
language: "java"
lang: "en"
category: "function"
name: "Thread.holdsLock"
signature: "public static native boolean holdsLock(Object obj)"
title: "Thread.holdsLock"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.holdsLock

```java
public static native boolean holdsLock(Object obj)
```

Returns `true` if and only if the current thread holds the
 monitor lock on the specified object.

 

This method is designed to allow a program to assert that
 the current thread already holds a specified lock:
 
```

     assert Thread.holdsLock(obj);
 
```

**参数**

- **obj** — the object on which to test lock ownership

**返回**

- `true` if the current thread holds the monitor lock on the specified object.

> *Since 1.4*
