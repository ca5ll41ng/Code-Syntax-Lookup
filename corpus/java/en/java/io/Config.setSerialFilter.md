---
id: "java-en-function-config-setserialfilter"
language: "java"
lang: "en"
category: "function"
name: "Config.setSerialFilter"
signature: "public static void setSerialFilter(ObjectInputFilter filter)"
title: "Config.setSerialFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Config.setSerialFilter

```java
public static void setSerialFilter(ObjectInputFilter filter)
```

Set the static JVM-wide filter if it has not already been configured or set.

**参数**

- **filter** — the deserialization filter to set as the JVM-wide filter; not null

**异常**

- **IllegalStateException** — if the filter has already been set or the initialization of the filter from the system property `jdk.serialFilter` or the security property `jdk.serialFilter` fails.
