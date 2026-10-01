---
id: "java-en-function-countedcompleter-decrementpendingcountunlesszero"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.decrementPendingCountUnlessZero"
signature: "public final int decrementPendingCountUnlessZero()"
title: "CountedCompleter.decrementPendingCountUnlessZero"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.decrementPendingCountUnlessZero

```java
public final int decrementPendingCountUnlessZero()
```

If the pending count is nonzero, (atomically) decrements it.

**返回**

- the initial (undecremented) pending count holding on entry to this method
