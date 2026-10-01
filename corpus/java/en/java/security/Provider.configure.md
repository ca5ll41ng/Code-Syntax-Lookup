---
id: "java-en-function-provider-configure"
language: "java"
lang: "en"
category: "function"
name: "Provider.configure"
signature: "public Provider configure(String configArg)"
title: "Provider.configure"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.configure

```java
public Provider configure(String configArg)
```

Apply the supplied configuration argument to this `Provider`
 instance and return the configured `Provider`. Note that if
 this `Provider` cannot be configured in-place, a new
 `Provider` will be created and returned. Therefore,
 callers should always use the returned `Provider`.

 The default implementation throws `UnsupportedOperationException`.
 Subclasses should override this method only if a configuration argument
 is supported.

**参数**

- **configArg** — the configuration information for configuring this provider.

**返回**

- a `Provider` configured with the supplied configuration argument.

**异常**

- **UnsupportedOperationException** — if a configuration argument is not supported.
- **NullPointerException** — if the supplied configuration argument is `null`.
- **InvalidParameterException** — if the supplied configuration argument is invalid.

> *Since 9*
