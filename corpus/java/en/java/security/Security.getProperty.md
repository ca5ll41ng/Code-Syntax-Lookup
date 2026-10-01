---
id: "java-en-function-security-getproperty"
language: "java"
lang: "en"
category: "function"
name: "Security.getProperty"
signature: "public static String getProperty(String key)"
title: "Security.getProperty"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.getProperty

```java
public static String getProperty(String key)
```

Gets a security property value.

**参数**

- **key** — the key of the property being retrieved.

**返回**

- the value of the security property, or `null` if there is no property with that key.

**异常**

- **NullPointerException** — if key is `null`
- **IllegalArgumentException** — if key is reserved and cannot be used as a Security property name. Reserved keys are: "include".

**参见**

- #setProperty
