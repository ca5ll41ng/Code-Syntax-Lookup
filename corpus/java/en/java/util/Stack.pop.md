---
id: "java-en-function-stack-pop"
language: "java"
lang: "en"
category: "function"
name: "Stack.pop"
signature: "public synchronized E pop()"
title: "Stack.pop"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Stack.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stack.pop

```java
public synchronized E pop()
```

Removes the object at the top of this stack and returns that
 object as the value of this function.

**返回**

- The object at the top of this stack (the last item of the `Vector` object).

**异常**

- **EmptyStackException** — if this stack is empty.
