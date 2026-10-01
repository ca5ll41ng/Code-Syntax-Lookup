---
id: "java-en-function-countedcompleter-getrawresult"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.getRawResult"
signature: "public T getRawResult()"
title: "CountedCompleter.getRawResult"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.getRawResult

```java
public T getRawResult()
```

Returns the result of the computation.  By default,
 returns `null`, which is appropriate for `Void`
 actions, but in other cases should be overridden, almost
 always to return a field or function of a field that
 holds the result upon completion.

**返回**

- the result of the computation
