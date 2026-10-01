---
id: "java-en-function-configurationspi-enginegetappconfigurationentry"
language: "java"
lang: "en"
category: "function"
name: "ConfigurationSpi.engineGetAppConfigurationEntry"
signature: "protected abstract AppConfigurationEntry[] engineGetAppConfigurationEntry (String name)"
title: "ConfigurationSpi.engineGetAppConfigurationEntry"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/ConfigurationSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfigurationSpi.engineGetAppConfigurationEntry

```java
protected abstract AppConfigurationEntry[] engineGetAppConfigurationEntry (String name)
```

Retrieve the AppConfigurationEntries for the specified `name`.

**参数**

- **name** — the name used to index the Configuration.

**返回**

- an array of AppConfigurationEntries for the specified `name`, or null if there are no entries.
