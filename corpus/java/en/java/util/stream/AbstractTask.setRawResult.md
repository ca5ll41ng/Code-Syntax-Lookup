---
id: "java-en-function-abstracttask-setrawresult"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.setRawResult"
signature: "protected void setRawResult(R result)"
title: "AbstractTask.setRawResult"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.setRawResult

```java
protected void setRawResult(R result)
```

Does nothing; instead, subclasses should use
 `setLocalResult` to manage results.

**参数**

- **result** — must be null, or an exception is thrown (this is a safety tripwire to detect when `setRawResult()` is being used instead of `setLocalResult()`
