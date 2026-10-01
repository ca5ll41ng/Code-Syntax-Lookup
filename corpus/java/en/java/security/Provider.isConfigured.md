---
id: "java-en-function-provider-isconfigured"
language: "java"
lang: "en"
category: "function"
name: "Provider.isConfigured"
signature: "public boolean isConfigured()"
title: "Provider.isConfigured"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.isConfigured

```java
public boolean isConfigured()
```

Check if this `Provider` instance has been configured.

 The default implementation returns `true`.
 Subclasses should override this method if the `Provider` requires
 an explicit `configure` call after being constructed.

**返回**

- `true` if no further configuration is needed, `false` otherwise.

> *Since 9*
