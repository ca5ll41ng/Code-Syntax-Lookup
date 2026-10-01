---
id: "java-en-function-ofplatform-priority"
language: "java"
lang: "en"
category: "function"
name: "OfPlatform.priority"
signature: "OfPlatform priority(int priority)"
title: "OfPlatform.priority"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfPlatform.priority

```java
OfPlatform priority(int priority)
```

Sets the thread priority.

**参数**

- **priority** — priority

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the priority is less than `MIN_PRIORITY` or greater than `MAX_PRIORITY`
