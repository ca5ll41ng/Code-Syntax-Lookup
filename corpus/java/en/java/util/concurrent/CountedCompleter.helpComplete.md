---
id: "java-en-function-countedcompleter-helpcomplete"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.helpComplete"
signature: "public final void helpComplete(int maxTasks)"
title: "CountedCompleter.helpComplete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.helpComplete

```java
public final void helpComplete(int maxTasks)
```

If this task has not completed, attempts to process at most the
 given number of other unprocessed tasks for which this task is
 on the completion path, if any are known to exist.

**参数**

- **maxTasks** — the maximum number of tasks to process.  If less than or equal to zero, then no tasks are processed.
