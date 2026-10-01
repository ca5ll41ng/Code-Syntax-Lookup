---
id: "java-en-function-timer-getdate"
language: "java"
lang: "en"
category: "function"
name: "Timer.getDate"
signature: "public synchronized Date getDate(Integer id)"
title: "Timer.getDate"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.getDate

```java
public synchronized Date getDate(Integer id)
```

Gets a copy of the date associated to a timer notification.

**参数**

- **id** — The timer notification identifier.

**返回**

- A copy of the date or null if the identifier is not mapped to any timer notification registered for this timer MBean.
