---
id: "java-en-function-system-setproperties"
language: "java"
lang: "en"
category: "function"
name: "System.setProperties"
signature: "public static void setProperties(Properties props)"
title: "System.setProperties"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.setProperties

```java
public static void setProperties(Properties props)
```

Sets the system properties to the `Properties` argument.
 

 The argument becomes the current set of system properties for use
 by the `getProperty` method. If the argument is
 `null`, then the current set of system properties is
 forgotten.

 **Changing a standard system property may have unpredictable results
 unless otherwise specified**.
 See `getProperties getProperties` for details.

**参数**

- **props** — the new system properties.

**参见**

- #getProperties
- java.util.Properties
