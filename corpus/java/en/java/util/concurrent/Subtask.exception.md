---
id: "java-en-function-subtask-exception"
language: "java"
lang: "en"
category: "function"
name: "Subtask.exception"
signature: "Throwable exception()"
title: "Subtask.exception"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subtask.exception

```java
Throwable exception()
```

{@return the exception or error thrown by this subtask if it failed}
 If the scope is `#Cancellation cancelled`, the
 subtask failed before the scope was cancelled. If the subtask was forked with
 `fork` then the exception or error thrown by
 the `call` method is returned. If the subtask was
 forked with `fork` then the exception or error
 thrown by the `run` method is returned.

 

 Code executing in the scope owner thread can use this method to get the
 exception thrown by a failed subtask after it has `join() joined`.

 

 Code executing in a `Joiner` `onComplete(Subtask)
 onComplete` method should test that the `state() state` is
 `FAILED FAILED` before using this method to get the exception.

 

 This method may be invoked by any thread after the scope owner has joined.
 The only case where this method can be used to get the exception before the scope
 owner has joined is when called from the `onComplete(Subtask)` method.

**异常**

- **IllegalStateException** — if the subtask has not completed or completed with a result, or this method is invoked outside the context of the `onComplete(Subtask)` method before the owner thread has joined

**参见**

- State#FAILED
