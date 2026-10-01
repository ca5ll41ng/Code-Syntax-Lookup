---
id: "java-en-function-zonerules-equals"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.equals"
signature: "public boolean equals(Object otherRules)"
title: "ZoneRules.equals"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.equals

```java
public boolean equals(Object otherRules)
```

Checks if this set of rules equals another.
 

 Two rule sets are equal if they will always result in the same output
 for any given input instant or local date-time.
 Rules from two different groups may return false even if they are in fact the same.
 

 This definition should result in implementations comparing their entire state.

**参数**

- **otherRules** — the other rules, null returns false

**返回**

- true if this rules is the same as that specified
