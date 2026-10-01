---
id: "java-en-function-handler-setfilter"
language: "java"
lang: "en"
category: "function"
name: "Handler.setFilter"
signature: "public synchronized void setFilter(Filter newFilter)"
title: "Handler.setFilter"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.setFilter

```java
public synchronized void setFilter(Filter newFilter)
```

Set a `Filter` to control output on this `Handler`.
 

 For each call of `publish` the `Handler` will call
 this `Filter` (if it is non-null) to check if the
 `LogRecord` should be published or discarded.

**参数**

- **newFilter** — a `Filter` object (may be null)
