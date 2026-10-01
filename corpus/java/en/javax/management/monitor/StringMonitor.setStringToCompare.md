---
id: "java-en-function-stringmonitor-setstringtocompare"
language: "java"
lang: "en"
category: "function"
name: "StringMonitor.setStringToCompare"
signature: "public synchronized void setStringToCompare(String value) throws IllegalArgumentException"
title: "StringMonitor.setStringToCompare"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/StringMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringMonitor.setStringToCompare

```java
public synchronized void setStringToCompare(String value) throws IllegalArgumentException
```

Sets the string to compare with the observed attribute common
 to all observed MBeans.

**参数**

- **value** — The string value.

**异常**

- **IllegalArgumentException** — The specified string to compare is null.

**参见**

- #getStringToCompare
