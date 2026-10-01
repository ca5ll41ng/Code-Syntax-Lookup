---
id: "java-en-function-provider-provider"
language: "java"
lang: "en"
category: "function"
name: "Provider.Provider"
signature: "protected Provider(String name, double version, String info)"
title: "Provider.Provider"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.Provider

```java
protected Provider(String name, double version, String info)
```

Constructs a `Provider` with the specified name, version number,
 and information. Calling this constructor is equivalent to call the
 `Provider` with `name`
 name, `Double.toString(version)`, and `info`.

**参数**

- **name** — the provider name.
- **version** — the provider version number.
- **info** — a description of the provider and its services.

> **⚠ Deprecated** — use `Provider` instead.
