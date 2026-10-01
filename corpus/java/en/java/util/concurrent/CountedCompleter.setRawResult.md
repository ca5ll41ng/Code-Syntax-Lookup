---
id: "java-en-function-countedcompleter-setrawresult"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.setRawResult"
signature: "protected void setRawResult(T t)"
title: "CountedCompleter.setRawResult"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.setRawResult

```java
protected void setRawResult(T t)
```

A method that result-bearing CountedCompleters may optionally
 use to help maintain result data.  By default, does nothing.
 Overrides are not recommended. However, if this method is
 overridden to update existing objects or fields, then it must
 in general be defined to be thread-safe.
