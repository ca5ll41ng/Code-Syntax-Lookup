---
id: "java-en-function-numericaltype-setobservedattribute"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.setObservedAttribute"
signature: "public void setObservedAttribute(String attribute) throws IllegalArgumentException"
title: "NumericalType.setObservedAttribute"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.setObservedAttribute

```java
public void setObservedAttribute(String attribute) throws IllegalArgumentException
```

Sets the attribute to observe.
 
The observed attribute is not initialized by default (set to null).

**参数**

- **attribute** — The attribute to observe.

**异常**

- **IllegalArgumentException** — The specified attribute is null.

**参见**

- #getObservedAttribute
