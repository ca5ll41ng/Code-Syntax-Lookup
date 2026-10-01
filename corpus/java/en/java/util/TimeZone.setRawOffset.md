---
id: "java-en-function-timezone-setrawoffset"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.setRawOffset"
signature: "public abstract void setRawOffset(int offsetMillis)"
title: "TimeZone.setRawOffset"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.setRawOffset

```java
public abstract void setRawOffset(int offsetMillis)
```

Sets the base time zone offset to GMT.
 This is the offset to add to UTC to get local time.
 

 If an underlying `TimeZone` implementation subclass
 supports historical GMT offset changes, the specified GMT
 offset is set as the latest GMT offset and the difference from
 the known latest GMT offset value is used to adjust all
 historical GMT offset values.

**参数**

- **offsetMillis** — the given base time zone offset to GMT.
