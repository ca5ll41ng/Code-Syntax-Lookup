---
id: "java-en-function-system-clearproperty"
language: "java"
lang: "en"
category: "function"
name: "System.clearProperty"
signature: "public static String clearProperty(String key)"
title: "System.clearProperty"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.clearProperty

```java
public static String clearProperty(String key)
```

Removes the system property indicated by the specified key.

 **Changing a standard system property may have unpredictable results
 unless otherwise specified**.
 See `getProperties getProperties` method for details.

**参数**

- **key** — the name of the system property to be removed.

**返回**

- the previous string value of the system property, or `null` if there was no property with that key.

**异常**

- **NullPointerException** — if `key` is `null`.
- **IllegalArgumentException** — if `key` is empty.

**参见**

- #getProperty
- #setProperty
- java.util.Properties

> *Since 1.5*
