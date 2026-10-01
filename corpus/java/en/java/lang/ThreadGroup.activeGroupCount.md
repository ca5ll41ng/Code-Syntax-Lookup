---
id: "java-en-function-threadgroup-activegroupcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.activeGroupCount"
signature: "public int activeGroupCount()"
title: "ThreadGroup.activeGroupCount"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.activeGroupCount

```java
public int activeGroupCount()
```

Returns an estimate of the number of groups in this thread group and its
 subgroups. Recursively iterates over all subgroups in this thread group.

 

 The value returned is only an estimate because the number of
 thread groups may change dynamically while this method traverses
 internal data structures. This method is intended primarily for
 debugging and monitoring purposes.

**返回**

- the number of thread groups with this thread group as an ancestor
