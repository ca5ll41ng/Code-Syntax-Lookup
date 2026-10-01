---
id: "java-en-function-weekfields-equals"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.equals"
signature: "public boolean equals(Object object)"
title: "WeekFields.equals"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.equals

```java
public boolean equals(Object object)
```

Checks if this `WeekFields` is equal to the specified object.
 

 The comparison is based on the entire state of the rules, which is
 the first day-of-week and minimal days.

**参数**

- **object** — the other rules to compare to, null returns false

**返回**

- true if this is equal to the specified rules
