---
id: "java-en-function-stackwalker-foreach"
language: "java"
lang: "en"
category: "function"
name: "StackWalker.forEach"
signature: "public void forEach(Consumer<? super StackFrame> action)"
title: "StackWalker.forEach"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackWalker.forEach

```java
public void forEach(Consumer<? super StackFrame> action)
```

Performs the given action on each element of `StackFrame` stream
 of the current thread, traversing from the top frame of the stack,
 which is the method calling this `forEach` method.

 

 This method is equivalent to calling
 
 `walk(s -> { s.forEach(action); return null; `);}

**参数**

- **action** — an action to be performed on each `StackFrame` of the stack of the current thread
