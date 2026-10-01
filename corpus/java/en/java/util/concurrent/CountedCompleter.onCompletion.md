---
id: "java-en-function-countedcompleter-oncompletion"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.onCompletion"
signature: "public void onCompletion(CountedCompleter<?> caller)"
title: "CountedCompleter.onCompletion"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.onCompletion

```java
public void onCompletion(CountedCompleter<?> caller)
```

Performs an action when method `tryComplete` is invoked
 and the pending count is zero, or when the unconditional
 method `complete` is invoked.  By default, this method
 does nothing. You can distinguish cases by checking the
 identity of the given caller argument. If not equal to `this`, then it is typically a subtask that may contain results
 (and/or links to other results) to combine.

**参数**

- **caller** — the task invoking this method (which may be this task itself)
