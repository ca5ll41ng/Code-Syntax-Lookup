---
id: "java-en-function-abstracttask-getrawresult"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.getRawResult"
signature: "public R getRawResult()"
title: "AbstractTask.getRawResult"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.getRawResult

```java
public R getRawResult()
```

Returns the local result, if any. Subclasses should use
 `setLocalResult` and `getLocalResult` to manage
 results.  This returns the local result so that calls from within the
 fork-join framework will return the correct result.

**返回**

- local result for this node previously stored with `setLocalResult`
