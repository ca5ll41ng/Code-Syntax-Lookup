---
id: "java-en-function-zoneid-systemdefault"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.systemDefault"
signature: "public static ZoneId systemDefault()"
title: "ZoneId.systemDefault"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.systemDefault

```java
public static ZoneId systemDefault()
```

Gets the system default time-zone.
 

 This queries `getDefault` to find the default time-zone
 and converts it to a `ZoneId`. If the system default time-zone is changed,
 then the result of this method will also change.

**返回**

- the zone ID, not null

**异常**

- **DateTimeException** — if the converted zone ID has an invalid format
- **ZoneRulesException** — if the converted zone region ID cannot be found
