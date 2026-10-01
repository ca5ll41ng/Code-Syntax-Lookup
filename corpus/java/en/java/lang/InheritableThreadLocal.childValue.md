---
id: "java-en-function-inheritablethreadlocal-childvalue"
language: "java"
lang: "en"
category: "function"
name: "InheritableThreadLocal.childValue"
signature: "protected T childValue(T parentValue)"
title: "InheritableThreadLocal.childValue"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/InheritableThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InheritableThreadLocal.childValue

```java
protected T childValue(T parentValue)
```

Computes the child's initial value for this inheritable thread-local
 variable as a function of the parent's value at the time the child
 thread is created.  This method is called from within the parent
 thread before the child is started.
 

 This method merely returns its input argument, and should be overridden
 if a different behavior is desired.

**参数**

- **parentValue** — the parent thread's value

**返回**

- the child thread's initial value
