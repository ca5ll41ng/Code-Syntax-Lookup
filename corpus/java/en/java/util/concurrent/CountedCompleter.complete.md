---
id: "java-en-function-countedcompleter-complete"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.complete"
signature: "public void complete(T rawResult)"
title: "CountedCompleter.complete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.complete

```java
public void complete(T rawResult)
```

Regardless of pending count, invokes
 `onCompletion`, marks this task as
 complete and further triggers `tryComplete` on this
 task's completer, if one exists.  The given rawResult is
 used as an argument to `setRawResult` before invoking
 `onCompletion` or marking this task
 as complete; its value is meaningful only for classes
 overriding `setRawResult`.  This method does not modify
 the pending count.

 

This method may be useful when forcing completion as soon as
 any one (versus all) of several subtask results are obtained.
 However, in the common (and recommended) case in which `setRawResult` is not overridden, this effect can be obtained
 more simply using `quietlyCompleteRoot`.

**参数**

- **rawResult** — the raw result
