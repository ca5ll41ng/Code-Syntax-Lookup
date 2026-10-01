---
id: "java-en-function-configuration-getappconfigurationentry"
language: "java"
lang: "en"
category: "function"
name: "Configuration.getAppConfigurationEntry"
signature: "public abstract AppConfigurationEntry[] getAppConfigurationEntry (String name)"
title: "Configuration.getAppConfigurationEntry"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.getAppConfigurationEntry

```java
public abstract AppConfigurationEntry[] getAppConfigurationEntry (String name)
```

Retrieve the AppConfigurationEntries for the specified `name`
 from this Configuration.

**参数**

- **name** — the name used to index the Configuration.

**返回**

- an array of AppConfigurationEntries for the specified `name` from this Configuration, or null if there are no entries for the specified `name`
