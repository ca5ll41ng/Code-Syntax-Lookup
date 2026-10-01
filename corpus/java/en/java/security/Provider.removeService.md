---
id: "java-en-function-provider-removeservice"
language: "java"
lang: "en"
category: "function"
name: "Provider.removeService"
signature: "protected void removeService(Service s)"
title: "Provider.removeService"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.removeService

```java
protected void removeService(Service s)
```

Remove a service previously added using
 `putService putService`. The specified service is removed from
 this `Provider`. It will no longer be returned by
 `getService getService` and its information will be removed
 from this provider's Hashtable.

**参数**

- **s** — the Service to be removed

**异常**

- **NullPointerException** — if s is `null`

> *Since 1.5*
