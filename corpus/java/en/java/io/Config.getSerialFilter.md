---
id: "java-en-function-config-getserialfilter"
language: "java"
lang: "en"
category: "function"
name: "Config.getSerialFilter"
signature: "public static ObjectInputFilter getSerialFilter()"
title: "Config.getSerialFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Config.getSerialFilter

```java
public static ObjectInputFilter getSerialFilter()
```

Returns the static JVM-wide deserialization filter or `null` if not configured.

**返回**

- the static JVM-wide deserialization filter or `null` if not configured

**异常**

- **IllegalStateException** — if the initialization of the filter from the system property `jdk.serialFilter` or the security property `jdk.serialFilter` fails.
