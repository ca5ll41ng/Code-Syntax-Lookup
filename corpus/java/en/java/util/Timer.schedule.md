---
id: "java-en-function-timer-schedule"
language: "java"
lang: "en"
category: "function"
name: "Timer.schedule"
signature: "public void schedule(TimerTask task, long delay)"
title: "Timer.schedule"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.schedule

```java
public void schedule(TimerTask task, long delay)
```

Schedules the specified task for execution after the specified delay.

**参数**

- **task** — task to be scheduled.
- **delay** — delay in milliseconds before task is to be executed.

**异常**

- **IllegalArgumentException** — if `delay` is negative, or `delay + System.currentTimeMillis()` is negative.
- **IllegalStateException** — if task was already scheduled or cancelled, timer was cancelled, or timer thread terminated.
- **NullPointerException** — if `task` is null
