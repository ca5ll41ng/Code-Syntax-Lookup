---
id: "java-en-function-security-setproperty"
language: "java"
lang: "en"
category: "function"
name: "Security.setProperty"
signature: "public static void setProperty(String key, String datum)"
title: "Security.setProperty"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.setProperty

```java
public static void setProperty(String key, String datum)
```

Sets a security property value.

**参数**

- **key** — the name of the property to be set.
- **datum** — the value of the property to be set.

**异常**

- **NullPointerException** — if key or datum is `null`
- **IllegalArgumentException** — if key is reserved and cannot be used as a Security property name. Reserved keys are: "include".

**参见**

- #getProperty
