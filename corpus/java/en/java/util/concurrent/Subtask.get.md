---
id: "java-en-function-subtask-get"
language: "java"
lang: "en"
category: "function"
name: "Subtask.get"
signature: "T get()"
title: "Subtask.get"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subtask.get

```java
T get()
```

Returns the result of this subtask if it completed successfully. If the scope
 is `#Cancellation cancelled`, the subtask
 completed successfully before the scope was cancelled. If the subtask was
 forked with `fork` then the result from the
 `call` method is returned. If the subtask was forked
 with `fork` then `null` is returned.

 

 Code executing in the scope owner thread can use this method to get the
 result of a successful subtask after it has `join() joined`.

 

 Code executing in the `Joiner` `onComplete(Subtask)
 onComplete` method should test that the `state() state` is
 `SUCCESS SUCCESS` before using this method to get the result.

 

 This method may be invoked by any thread after the scope owner has joined.
 The only case where this method can be used to get the result before the scope
 owner has joined is when called from the `onComplete(Subtask)` method.

**返回**

- the possibly-null result

**异常**

- **IllegalStateException** — if the subtask has not completed or did not complete successfully, or this method is invoked outside the context of the `onComplete(Subtask)` method before the owner thread has joined

**参见**

- State#SUCCESS
