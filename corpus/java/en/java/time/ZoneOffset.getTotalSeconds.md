---
id: "java-en-function-zoneoffset-gettotalseconds"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.getTotalSeconds"
signature: "public int getTotalSeconds()"
title: "ZoneOffset.getTotalSeconds"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.getTotalSeconds

```java
public int getTotalSeconds()
```

Gets the total zone offset in seconds.
 

 This is the primary way to access the offset amount.
 It returns the total of the hours, minutes and seconds fields as a
 single offset that can be added to a time.

**返回**

- the total zone offset amount in seconds
