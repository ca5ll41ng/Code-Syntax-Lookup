---
id: "java-en-function-valuerange-tostring"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.toString"
signature: "public String toString()"
title: "ValueRange.toString"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.toString

```java
public String toString()
```

Outputs this range as a `String`.
 

 The format will be '{min}/{largestMin} - {smallestMax}/{max}',
 where the largestMin or smallestMax sections may be omitted, together
 with associated slash, if they are the same as the min or max.

**返回**

- a string representation of this range, not null
