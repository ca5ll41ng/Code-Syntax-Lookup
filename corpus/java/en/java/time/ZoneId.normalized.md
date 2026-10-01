---
id: "java-en-function-zoneid-normalized"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.normalized"
signature: "public ZoneId normalized()"
title: "ZoneId.normalized"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.normalized

```java
public ZoneId normalized()
```

Normalizes the time-zone ID, returning a `ZoneOffset` where possible.
 

 The returns a normalized `ZoneId` that can be used in place of this ID.
 The result will have `ZoneRules` equivalent to those returned by this object,
 however the ID returned by `getId()` may be different.
 

 The normalization checks if the rules of this `ZoneId` have a fixed offset.
 If they do, then the `ZoneOffset` equal to that offset is returned.
 Otherwise `this` is returned.

**返回**

- the time-zone unique ID, not null
