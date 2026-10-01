---
id: "java-en-function-timer-getnboccurences"
language: "java"
lang: "en"
category: "function"
name: "Timer.getNbOccurences"
signature: "public synchronized Long getNbOccurences(Integer id)"
title: "Timer.getNbOccurences"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.getNbOccurences

```java
public synchronized Long getNbOccurences(Integer id)
```

Gets a copy of the remaining number of occurrences associated to a timer notification.

**参数**

- **id** — The timer notification identifier.

**返回**

- A copy of the remaining number of occurrences or null if the identifier is not mapped to any timer notification registered for this timer MBean.
