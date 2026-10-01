---
id: "java-en-function-stackwalker-walk"
language: "java"
lang: "en"
category: "function"
name: "StackWalker.walk"
signature: "public <T> T walk(Function<? super Stream<StackFrame>, ? extends T> function)"
title: "StackWalker.walk"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackWalker.walk

```java
public <T> T walk(Function<? super Stream<StackFrame>, ? extends T> function)
```

Applies the given function to the stream of `StackFrame`s
 for the current thread, traversing from the top frame of the stack,
 which is the method calling this `walk` method.

 

The `StackFrame` stream will be closed when
 this method returns.  When a closed `Stream` object
 is reused, `IllegalStateException` will be thrown.

 For example, to find the first 10 calling frames, first skipping those frames
 whose declaring class is in package `com.foo`:
 {@snippet lang="java" :
 List frames = StackWalker.getInstance().walk(s ->
         s.dropWhile(f -> f.getClassName().startsWith("com.foo."))
          .limit(10)
          .toList());
 }

 

This method takes a `Function` accepting a `Stream`,
 rather than returning a `Stream` and allowing the
 caller to directly manipulate the stream. The Java virtual machine is
 free to reorganize a thread's control stack, for example, via
 deoptimization. By taking a `Function` parameter, this method
 allows access to stack frames through a stable view of a thread's control
 stack.

 

Parallel execution is effectively disabled and stream pipeline
 execution will only occur on the current thread.

 specific to the stack walking and ensures that the stack walking is
 performed above the anchored frame. When the stream object is closed or
 being reused, `IllegalStateException` will be thrown.

**参数**

- **function** — a function that takes a stream of `StackFrame stack frames` and returns a result.
- **The** — type of the result of applying the function to the stream of `StackFrame stack frame`.

**返回**

- the result of applying the function to the stream of `StackFrame stack frame`.
