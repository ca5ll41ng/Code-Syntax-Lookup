---
id: "java-en-function-system-getproperty"
language: "java"
lang: "en"
category: "function"
name: "System.getProperty"
signature: "public static String getProperty(String key)"
title: "System.getProperty"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.getProperty

```java
public static String getProperty(String key)
```

Gets the system property indicated by the specified key.
 

 If there is no current set of system properties, a set of system
 properties is first created and initialized in the same manner as
 for the `getProperties` method.

 **Changing a standard system property may have unpredictable results
 unless otherwise specified**.
 See `getProperties getProperties` for details.

**参数**

- **key** — the name of the system property.

**返回**

- the string value of the system property, or `null` if there is no property with that key.

**异常**

- **NullPointerException** — if `key` is `null`.
- **IllegalArgumentException** — if `key` is empty.

**参见**

- #setProperty
- java.lang.System#getProperties()
