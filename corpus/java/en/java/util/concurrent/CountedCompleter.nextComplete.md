---
id: "java-en-function-countedcompleter-nextcomplete"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.nextComplete"
signature: "public final CountedCompleter<?> nextComplete()"
title: "CountedCompleter.nextComplete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.nextComplete

```java
public final CountedCompleter<?> nextComplete()
```

If this task does not have a completer, invokes `quietlyComplete` and returns `null`.  Or, if
 the completer's pending count is non-zero, decrements that
 pending count and returns `null`.  Otherwise, returns the
 completer.  This method can be used as part of a completion
 traversal loop for homogeneous task hierarchies:

 
```
 `for (CountedCompleter<?> c = firstComplete();
      c != null;
      c = c.nextComplete()) {
   // ... process c ...
 `}
```

**返回**

- the completer, or `null` if none
