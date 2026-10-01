---
id: "java-en-function-timezone-getdefault"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getDefault"
signature: "public static TimeZone getDefault()"
title: "TimeZone.getDefault"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getDefault

```java
public static TimeZone getDefault()
```

Gets the default `TimeZone` of the Java virtual machine. If the
 cached default `TimeZone` is available, its clone is returned.
 Otherwise, the method takes the following steps to determine the default
 time zone.

 
 
- Use the {@systemProperty user.timezone} property value as the default
 time zone ID if it's available.
 
- Detect the platform time zone ID. The source of the
 platform time zone and ID mapping may vary with implementation.
 
- Use `GMT` as the last resort if the given or detected
 time zone ID is unknown.
 

 

The default `TimeZone` created from the ID is cached,
 and its clone is returned. The `user.timezone` property
 value is set to the ID upon return.

**返回**

- the default `TimeZone`

**参见**

- #setDefault(TimeZone)
