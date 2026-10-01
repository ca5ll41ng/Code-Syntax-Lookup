---
id: "java-en-function-builder-factory"
language: "java"
lang: "en"
category: "function"
name: "Builder.factory"
signature: "ThreadFactory factory()"
title: "Builder.factory"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.factory

```java
ThreadFactory factory()
```

Returns a `ThreadFactory` to create threads from the current
 state of the builder. The returned thread factory is safe for use by
 multiple concurrent threads.

**返回**

- a thread factory to create threads
