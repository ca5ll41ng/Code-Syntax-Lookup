---
id: "java-en-function-drivermanager-setlogintimeout"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.setLoginTimeout"
signature: "public static void setLoginTimeout(int seconds)"
title: "DriverManager.setLoginTimeout"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.setLoginTimeout

```java
public static void setLoginTimeout(int seconds)
```

Sets the maximum time in seconds that a driver will wait
 while attempting to connect to a database once the driver has
 been identified.

**参数**

- **seconds** — the login time limit in seconds; zero means there is no limit

**参见**

- #getLoginTimeout
