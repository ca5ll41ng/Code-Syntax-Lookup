---
id: "java-en-function-service-getattribute"
language: "java"
lang: "en"
category: "function"
name: "Service.getAttribute"
signature: "public final String getAttribute(String name)"
title: "Service.getAttribute"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Service.getAttribute

```java
public final String getAttribute(String name)
```

Return the value of the specified attribute or `null` if this
 attribute is not set for this Service.

**参数**

- **name** — the name of the requested attribute

**返回**

- the value of the specified attribute or `null` if the attribute is not present

**异常**

- **NullPointerException** — if name is `null`
