---
id: "java-en-function-zoneoffset-compareto"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.compareTo"
signature: "public int compareTo(ZoneOffset other)"
title: "ZoneOffset.compareTo"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.compareTo

```java
public int compareTo(ZoneOffset other)
```

Compares this offset to another offset in descending order.
 

 The offsets are compared in the order that they occur for the same time
 of day around the world. Thus, an offset of `+10:00` comes before an
 offset of `+09:00` and so on down to `-18:00`.
 

 The comparison is "consistent with equals", as defined by `Comparable`.

**参数**

- **other** — the other date to compare to, not null

**返回**

- the comparator value, that is less than zero if this totalSeconds is less than `other` totalSeconds, zero if they are equal, greater than zero if this totalSeconds is greater than `other` totalSeconds

**异常**

- **NullPointerException** — if `other` is null
