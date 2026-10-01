---
id: "java-en-function-logger-setfilter"
language: "java"
lang: "en"
category: "function"
name: "Logger.setFilter"
signature: "public void setFilter(Filter newFilter)"
title: "Logger.setFilter"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.setFilter

```java
public void setFilter(Filter newFilter)
```

Set a filter to control output on this Logger.
 

 After passing the initial "level" check, the Logger will
 call this Filter to check if a log record should really
 be published.

**参数**

- **newFilter** — a filter object (may be null)
