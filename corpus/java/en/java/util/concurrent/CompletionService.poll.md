---
id: "java-en-function-completionservice-poll"
language: "java"
lang: "en"
category: "function"
name: "CompletionService.poll"
signature: "Future<V> poll()"
title: "CompletionService.poll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionService.poll

```java
Future<V> poll()
```

Retrieves and removes the Future representing the next
 completed task, or `null` if none are present.

**返回**

- the Future representing the next completed task, or `null` if none are present
