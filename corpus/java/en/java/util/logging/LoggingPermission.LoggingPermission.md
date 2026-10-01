---
id: "java-en-function-loggingpermission-loggingpermission"
language: "java"
lang: "en"
category: "function"
name: "LoggingPermission.LoggingPermission"
signature: "public LoggingPermission(String name, String actions) throws IllegalArgumentException"
title: "LoggingPermission.LoggingPermission"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LoggingPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingPermission.LoggingPermission

```java
public LoggingPermission(String name, String actions) throws IllegalArgumentException
```

Creates a new LoggingPermission object.

**参数**

- **name** — Permission name.  Must be "control".
- **actions** — Must be either null or the empty string.

**异常**

- **NullPointerException** — if name is null.
- **IllegalArgumentException** — if name is empty or if arguments are invalid.
