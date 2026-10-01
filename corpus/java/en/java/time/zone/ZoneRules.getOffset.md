---
id: "java-en-function-zonerules-getoffset"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getOffset"
signature: "public ZoneOffset getOffset(Instant instant)"
title: "ZoneRules.getOffset"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getOffset

```java
public ZoneOffset getOffset(Instant instant)
```

Gets the offset applicable at the specified instant in these rules.
 

 The mapping from an instant to an offset is simple, there is only
 one valid offset for each instant.
 This method returns that offset.

**参数**

- **instant** — the instant to find the offset for, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the offset, not null
