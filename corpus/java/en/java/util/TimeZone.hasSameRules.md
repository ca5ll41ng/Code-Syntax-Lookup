---
id: "java-en-function-timezone-hassamerules"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.hasSameRules"
signature: "public boolean hasSameRules(TimeZone other)"
title: "TimeZone.hasSameRules"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.hasSameRules

```java
public boolean hasSameRules(TimeZone other)
```

Returns true if this zone has the same rule and offset as another zone.
 That is, if this zone differs only in ID, if at all.  Returns false
 if the other zone is null.

**参数**

- **other** — the `TimeZone` object to be compared with

**返回**

- true if the other zone is not null and is the same as this one, with the possible exception of the ID

> *Since 1.2*
