---
id: "java-en-function-countedcompleter-getroot"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.getRoot"
signature: "public final CountedCompleter<?> getRoot()"
title: "CountedCompleter.getRoot"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.getRoot

```java
public final CountedCompleter<?> getRoot()
```

Returns the root of the current computation; i.e., this
 task if it has no completer, else its completer's root.

**返回**

- the root of the current computation
