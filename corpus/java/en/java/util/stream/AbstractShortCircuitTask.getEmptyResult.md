---
id: "java-en-function-abstractshortcircuittask-getemptyresult"
language: "java"
lang: "en"
category: "function"
name: "AbstractShortCircuitTask.getEmptyResult"
signature: "protected abstract R getEmptyResult()"
title: "AbstractShortCircuitTask.getEmptyResult"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractShortCircuitTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractShortCircuitTask.getEmptyResult

```java
protected abstract R getEmptyResult()
```

Returns the value indicating the computation completed with no task
 finding a short-circuitable result.  For example, for a "find" operation,
 this might be null or an empty `Optional`.

**返回**

- the result to return when no task finds a result
