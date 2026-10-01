---
id: "java-en-function-countedcompleter-propagatecompletion"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.propagateCompletion"
signature: "public final void propagateCompletion()"
title: "CountedCompleter.propagateCompletion"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.propagateCompletion

```java
public final void propagateCompletion()
```

Equivalent to `tryComplete` but does not invoke `onCompletion` along the completion path:
 If the pending count is nonzero, decrements the count;
 otherwise, similarly tries to complete this task's completer, if
 one exists, else marks this task as complete. This method may be
 useful in cases where `onCompletion` should not, or need
 not, be invoked for each completer in a computation.
