---
id: "java-en-function-zoneoffset-getid"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.getId"
signature: "public String getId()"
title: "ZoneOffset.getId"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.getId

```java
public String getId()
```

Gets the normalized zone offset ID.
 

 The ID is minor variation to the standard ISO-8601 formatted string
 for the offset. There are three formats:
 
 
- `Z` - for UTC (ISO-8601)
 
- `+hh:mm` or `-hh:mm` - if the seconds are zero (ISO-8601)
 
- `+hh:mm:ss` or `-hh:mm:ss` - if the seconds are non-zero (not ISO-8601)

**返回**

- the zone offset ID, not null
