---
id: "java-en-function-namingmanager-cpe"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.CPE"
signature: "public static final String CPE = \"java.naming.spi.CannotProceedException\""
title: "NamingManager.CPE"
directive: "field"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.CPE

```java
public static final String CPE = "java.naming.spi.CannotProceedException"
```

Constant that holds the name of the environment property into
 which `getContinuationContext()` stores the value of its
 `CannotProceedException` parameter.
 This property is inherited by the continuation context, and may
 be used by that context's service provider to inspect the
 fields of the exception.

 The value of this constant is "java.naming.spi.CannotProceedException".

**参见**

- #getContinuationContext

> *Since 1.3*
