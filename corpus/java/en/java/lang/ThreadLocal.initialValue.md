---
id: "java-en-function-threadlocal-initialvalue"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocal.initialValue"
signature: "protected T initialValue()"
title: "ThreadLocal.initialValue"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocal.initialValue

```java
protected T initialValue()
```

Returns the current thread's "initial value" for this
 thread-local variable.  This method will be invoked the first
 time a thread accesses the variable with the `get`
 method, unless the thread previously invoked the `set`
 method, in which case the `initialValue` method will not
 be invoked for the thread.  Normally, this method is invoked at
 most once per thread, but it may be invoked again in case of
 subsequent invocations of `remove` followed by `get`.

 This implementation simply returns `null`; if the
 programmer desires thread-local variables to have an initial
 value other than `null`, then either `ThreadLocal`
 can be subclassed and this method overridden or the method
 `withInitial` can be used to
 construct a `ThreadLocal`.

**返回**

- the initial value for this thread-local

**参见**

- #withInitial(java.util.function.Supplier)
