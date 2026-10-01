---
id: "java-en-function-timermbean-getnboccurences"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.getNbOccurences"
signature: "public Long getNbOccurences(Integer id)"
title: "TimerMBean.getNbOccurences"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.getNbOccurences

```java
public Long getNbOccurences(Integer id)
```

Gets a copy of the remaining number of occurrences associated to a timer notification.

**参数**

- **id** — The timer notification identifier.

**返回**

- A copy of the remaining number of occurrences or null if the identifier is not mapped to any timer notification registered for this timer MBean.
