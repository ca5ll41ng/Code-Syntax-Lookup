---
id: "java-en-function-zoneoffsettransitionrule-getmonth"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.getMonth"
signature: "public Month getMonth()"
title: "ZoneOffsetTransitionRule.getMonth"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.getMonth

```java
public Month getMonth()
```

Gets the month of the transition.
 

 If the rule defines an exact date then the month is the month of that date.
 

 If the rule defines a week where the transition might occur, then the month
 if the month of either the earliest or latest possible date of the cutover.

**返回**

- the month of the transition, not null
