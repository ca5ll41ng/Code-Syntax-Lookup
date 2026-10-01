---
id: "java-en-function-structuredtaskscope-close"
language: "java"
lang: "en"
category: "function"
name: "StructuredTaskScope.close"
signature: "void close()"
title: "StructuredTaskScope.close"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StructuredTaskScope.close

```java
void close()
```

Closes this scope.

 

 This method first `#Cancellation cancels` the scope, if not already
 cancelled. This `interrupt() interrupts` the threads executing
 unfinished subtasks. This method then waits for all threads to finish. If interrupted
 while waiting then it will continue to wait until the threads finish, before
 completing with the `isInterrupted() interrupted status` set.

 

 This method may only be invoked by the scope owner. If the scope
 is already closed then the scope owner invoking this method has no effect.

 

 A `StructuredTaskScope` is intended to be used in a structured
 manner. If this method is called to close a scope before nested scopes are
 closed then it closes the underlying construct of each nested scope (in the reverse
 order that they were created in), closes this scope, and then throws `StructureViolationException`. Similarly, if this method is called to close a scope
 while executing with `ScopedValue scoped value` bindings, and the scope
 was created before the scoped values were bound, then `StructureViolationException`
 is thrown after closing the scope. If a thread terminates without first closing
 scopes that it owns then termination will cause the underlying construct of each
 of its open scopes to be closed. Closing is performed in the reverse order that the
 scopes were created in. Thread termination may therefore be delayed when the scope
 owner has to wait for threads forked in these scopes to finish.

**异常**

- **IllegalStateException** — thrown after closing the scope if the scope owner did not attempt to join after forking
- **WrongThreadException** — if the current thread is not the scope owner
- **StructureViolationException** — if a structure violation was detected
