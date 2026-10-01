---
id: "java-en-function-stack-search"
language: "java"
lang: "en"
category: "function"
name: "Stack.search"
signature: "public synchronized int search(Object o)"
title: "Stack.search"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Stack.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stack.search

```java
public synchronized int search(Object o)
```

Returns the 1-based position where an object is on this stack.
 If the object `o` occurs as an item in this stack, this
 method returns the distance from the top of the stack of the
 occurrence nearest the top of the stack; the topmost item on the
 stack is considered to be at distance `1`. The `equals`
 method is used to compare `o` to the
 items in this stack.

**参数**

- **o** — the desired object.

**返回**

- the 1-based position from the top of the stack where the object is located; the return value `-1` indicates that the object is not on the stack.
