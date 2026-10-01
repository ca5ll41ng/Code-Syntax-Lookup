---
id: "java-en-function-countermonitor-getnotify"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.getNotify"
signature: "public synchronized boolean getNotify()"
title: "CounterMonitor.getNotify"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.getNotify

```java
public synchronized boolean getNotify()
```

Gets the notification's on/off switch value common to all
 observed MBeans.

**返回**

- true if the counter monitor notifies when exceeding the threshold, false otherwise.

**参见**

- #setNotify
