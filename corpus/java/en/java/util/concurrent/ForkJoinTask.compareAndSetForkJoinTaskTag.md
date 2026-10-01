---
id: "java-en-function-forkjointask-compareandsetforkjointasktag"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.compareAndSetForkJoinTaskTag"
signature: "public final boolean compareAndSetForkJoinTaskTag(short expect, short update)"
title: "ForkJoinTask.compareAndSetForkJoinTaskTag"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.compareAndSetForkJoinTaskTag

```java
public final boolean compareAndSetForkJoinTaskTag(short expect, short update)
```

Atomically conditionally sets the tag value for this task.
 Among other applications, tags can be used as visit markers
 in tasks operating on graphs, as in methods that check: `if (task.compareAndSetForkJoinTaskTag((short)0, (short)1))`
 before processing, otherwise exiting because the node has
 already been visited.

**参数**

- **expect** — the expected tag value
- **update** — the new tag value

**返回**

- `true` if successful; i.e., the current value was equal to `expect` and was changed to `update`.

> *Since 1.8*
