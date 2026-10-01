---
id: "java-en-function-stack-peek"
language: "java"
lang: "en"
category: "function"
name: "Stack.peek"
signature: "public synchronized E peek()"
title: "Stack.peek"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Stack.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stack.peek

```java
public synchronized E peek()
```

Looks at the object at the top of this stack without removing it
 from the stack.

**返回**

- the object at the top of this stack (the last item of the `Vector` object).

**异常**

- **EmptyStackException** — if this stack is empty.
