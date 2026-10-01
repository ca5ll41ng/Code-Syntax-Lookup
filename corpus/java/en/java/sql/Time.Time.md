---
id: "java-en-function-time-time"
language: "java"
lang: "en"
category: "function"
name: "Time.Time"
signature: "public Time(int hour, int minute, int second)"
title: "Time.Time"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Time.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Time.Time

```java
public Time(int hour, int minute, int second)
```

Constructs a `Time` object initialized with the
 given values for the hour, minute, and second.
 The driver sets the date components to January 1, 1970.
 Any method that attempts to access the date components of a
 `Time` object will throw a
 `java.lang.IllegalArgumentException`.
 

 The result is undefined if a given argument is out of bounds.

**参数**

- **hour** — 0 to 23
- **minute** — 0 to 59
- **second** — 0 to 59

> **⚠ Deprecated** — Use the constructor that takes a milliseconds value in place of this constructor
