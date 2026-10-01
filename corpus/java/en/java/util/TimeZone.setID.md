---
id: "java-en-function-timezone-setid"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.setID"
signature: "public void setID(String ID)"
title: "TimeZone.setID"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.setID

```java
public void setID(String ID)
```

Sets the time zone ID. This does not change any other data in
 the time zone object.
 `NullPointerException` if `ID` is `null`

**参数**

- **ID** — the new time zone ID.

**异常**

- **NullPointerException** — This method may throw a `NullPointerException` if `ID` is `null`
