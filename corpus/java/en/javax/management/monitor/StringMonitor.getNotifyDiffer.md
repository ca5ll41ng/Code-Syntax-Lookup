---
id: "java-en-function-stringmonitor-getnotifydiffer"
language: "java"
lang: "en"
category: "function"
name: "StringMonitor.getNotifyDiffer"
signature: "public synchronized boolean getNotifyDiffer()"
title: "StringMonitor.getNotifyDiffer"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/StringMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringMonitor.getNotifyDiffer

```java
public synchronized boolean getNotifyDiffer()
```

Gets the differing notification's on/off switch value common to
 all observed MBeans.

**返回**

- true if the string monitor notifies when differing from the string to compare, false otherwise.

**参见**

- #setNotifyDiffer
