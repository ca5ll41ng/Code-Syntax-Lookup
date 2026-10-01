---
id: "java-en-function-stringmonitor-getnotifymatch"
language: "java"
lang: "en"
category: "function"
name: "StringMonitor.getNotifyMatch"
signature: "public synchronized boolean getNotifyMatch()"
title: "StringMonitor.getNotifyMatch"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/StringMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringMonitor.getNotifyMatch

```java
public synchronized boolean getNotifyMatch()
```

Gets the matching notification's on/off switch value common to
 all observed MBeans.

**返回**

- true if the string monitor notifies when matching the string to compare, false otherwise.

**参见**

- #setNotifyMatch
