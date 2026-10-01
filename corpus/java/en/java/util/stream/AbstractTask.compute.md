---
id: "java-en-function-abstracttask-compute"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.compute"
signature: "public void compute()"
title: "AbstractTask.compute"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.compute

```java
public void compute()
```

Decides whether or not to split a task further or compute it
 directly. If computing directly, calls `doLeaf` and pass
 the result to `setRawResult`. Otherwise splits off
 subtasks, forking one and continuing as the other.

 

 The method is structured to conserve resources across a
 range of uses.  The loop continues with one of the child tasks
 when split, to avoid deep recursion. To cope with spliterators
 that may be systematically biased toward left-heavy or
 right-heavy splits, we alternate which child is forked versus
 continued in the loop.
