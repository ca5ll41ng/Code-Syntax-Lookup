---
id: "java-en-function-java-util-stack"
language: "java"
lang: "en"
category: "function"
name: "java.util.Stack"
title: "Stack"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Stack.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stack

The `Stack` class represents a last-in-first-out
 (LIFO) stack of objects. It extends class `Vector` with five
 operations that allow a vector to be treated as a stack. The usual
 `push` and `pop` operations are provided, as well as a
 method to `peek` at the top item on the stack, a method to test
 for whether the stack is `empty`, and a method to `search`
 the stack for an item and discover how far it is from the top.
 

 When a stack is first created, it contains no items.

 

A more complete and consistent set of LIFO stack operations is
 provided by the `Deque` interface and its implementations, which
 should be used in preference to this class.  For example:
 
```
   `Deque stack = new ArrayDeque();`
```

**参数**

- **Type** — of component elements

> *Since 1.0*
