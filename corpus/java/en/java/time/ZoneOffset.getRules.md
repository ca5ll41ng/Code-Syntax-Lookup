---
id: "java-en-function-zoneoffset-getrules"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.getRules"
signature: "public ZoneRules getRules()"
title: "ZoneOffset.getRules"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.getRules

```java
public ZoneRules getRules()
```

Gets the associated time-zone rules.
 

 The rules will always return this offset when queried.
 The implementation class is immutable, thread-safe and serializable.

**返回**

- the rules, not null
