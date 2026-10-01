---
id: "java-en-function-system-setproperty"
language: "java"
lang: "en"
category: "function"
name: "System.setProperty"
signature: "public static String setProperty(String key, String value)"
title: "System.setProperty"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.setProperty

```java
public static String setProperty(String key, String value)
```

Sets the system property indicated by the specified key.

 **Changing a standard system property may have unpredictable results
 unless otherwise specified**.
 See `getProperties getProperties` for details.

**参数**

- **key** — the name of the system property.
- **value** — the value of the system property.

**返回**

- the previous value of the system property, or `null` if it did not have one.

**异常**

- **NullPointerException** — if `key` or `value` is `null`.
- **IllegalArgumentException** — if `key` is empty.

**参见**

- #getProperty
- java.lang.System#getProperty(java.lang.String)
- java.lang.System#getProperty(java.lang.String, java.lang.String)

> *Since 1.2*
