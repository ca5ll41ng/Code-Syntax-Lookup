---
id: "java-en-function-timer-getfixedrate"
language: "java"
lang: "en"
category: "function"
name: "Timer.getFixedRate"
signature: "public synchronized Boolean getFixedRate(Integer id)"
title: "Timer.getFixedRate"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.getFixedRate

```java
public synchronized Boolean getFixedRate(Integer id)
```

Gets a copy of the flag indicating whether a periodic notification is
 executed at fixed-delay or at fixed-rate.

**参数**

- **id** — The timer notification identifier.

**返回**

- A copy of the flag indicating whether a periodic notification is executed at fixed-delay or at fixed-rate.
