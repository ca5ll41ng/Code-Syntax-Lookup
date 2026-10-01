---
id: "java-en-function-abstracttask-makechild"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.makeChild"
signature: "protected abstract K makeChild(Spliterator<P_IN> spliterator)"
title: "AbstractTask.makeChild"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.makeChild

```java
protected abstract K makeChild(Spliterator<P_IN> spliterator)
```

Constructs a new node of type T whose parent is the receiver; must call
 the AbstractTask(T, Spliterator) constructor with the receiver and the
 provided Spliterator.

**参数**

- **spliterator** — `Spliterator` describing the subtree rooted at this node, obtained by splitting the parent `Spliterator`

**返回**

- newly constructed child node
