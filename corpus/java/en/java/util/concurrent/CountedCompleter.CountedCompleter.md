---
id: "java-en-function-countedcompleter-countedcompleter"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.CountedCompleter"
signature: "protected CountedCompleter(CountedCompleter<?> completer, int initialPendingCount)"
title: "CountedCompleter.CountedCompleter"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.CountedCompleter

```java
protected CountedCompleter(CountedCompleter<?> completer, int initialPendingCount)
```

Creates a new CountedCompleter with the given completer
 and initial pending count.

**参数**

- **completer** — this task's completer, or `null` if none
- **initialPendingCount** — the initial pending count
