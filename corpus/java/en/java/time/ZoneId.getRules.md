---
id: "java-en-function-zoneid-getrules"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.getRules"
signature: "public abstract ZoneRules getRules()"
title: "ZoneId.getRules"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.getRules

```java
public abstract ZoneRules getRules()
```

Gets the time-zone rules for this ID allowing calculations to be performed.
 

 The rules provide the functionality associated with a time-zone,
 such as finding the offset for a given instant or local date-time.
 

 A time-zone can be invalid if it is deserialized in a Java Runtime which
 does not have the same rules loaded as the Java Runtime that stored it.
 In this case, calling this method will throw a `ZoneRulesException`.
 

 The rules are supplied by `ZoneRulesProvider`. An advanced provider may
 support dynamic updates to the rules without restarting the Java Runtime.
 If so, then the result of this method may change over time.
 Each individual call will be still remain thread-safe.
 

 `ZoneOffset` will always return a set of rules where the offset never changes.

**返回**

- the rules, not null

**异常**

- **ZoneRulesException** — if no rules are available for this ID
