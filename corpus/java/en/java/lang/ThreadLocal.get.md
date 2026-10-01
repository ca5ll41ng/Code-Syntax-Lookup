---
id: "java-en-function-threadlocal-get"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocal.get"
signature: "public T get()"
title: "ThreadLocal.get"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocal.get

```java
public T get()
```

Returns the value in the current thread's copy of this
 thread-local variable.  If the variable has no value for the
 current thread, it is first initialized to the value returned
 by an invocation of the `initialValue` method.

**返回**

- the current thread's value of this thread-local
