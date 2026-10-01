---
id: "java-en-function-zoneoffsettransitionrule-gettimedefinition"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.getTimeDefinition"
signature: "public TimeDefinition getTimeDefinition()"
title: "ZoneOffsetTransitionRule.getTimeDefinition"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.getTimeDefinition

```java
public TimeDefinition getTimeDefinition()
```

Gets the time definition, specifying how to convert the time to an instant.
 

 The local time can be converted to an instant using the standard offset,
 the wall offset or UTC.

**返回**

- the time definition, not null
