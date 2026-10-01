---
id: "java-en-function-threadlocal-set"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocal.set"
signature: "public void set(T value)"
title: "ThreadLocal.set"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocal.set

```java
public void set(T value)
```

Sets the current thread's copy of this thread-local variable
 to the specified value.  Most subclasses will have no need to
 override this method, relying solely on the `initialValue`
 method to set the values of thread-locals.

**参数**

- **value** — the value to be stored in the current thread's copy of this thread-local.
