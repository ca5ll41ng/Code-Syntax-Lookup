---
id: "java-en-function-countedcompleter-onexceptionalcompletion"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.onExceptionalCompletion"
signature: "public boolean onExceptionalCompletion(Throwable ex, CountedCompleter<?> caller)"
title: "CountedCompleter.onExceptionalCompletion"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.onExceptionalCompletion

```java
public boolean onExceptionalCompletion(Throwable ex, CountedCompleter<?> caller)
```

Performs an action when method `completeExceptionally` is invoked or method `compute` throws an exception, and this task has not already
 otherwise completed normally. On entry to this method, this task
 `isCompletedAbnormally`.  The return value
 of this method controls further propagation: If `true`
 and this task has a completer that has not completed, then that
 completer is also completed exceptionally, with the same
 exception as this completer.  The default implementation of
 this method does nothing except return `true`.

**参数**

- **ex** — the exception
- **caller** — the task invoking this method (which may be this task itself)

**返回**

- `true` if this exception should be propagated to this task's completer, if one exists
