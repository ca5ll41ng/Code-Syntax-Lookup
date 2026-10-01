---
id: "java-en-function-configuration-getconfiguration"
language: "java"
lang: "en"
category: "function"
name: "Configuration.getConfiguration"
signature: "public static Configuration getConfiguration()"
title: "Configuration.getConfiguration"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.getConfiguration

```java
public static Configuration getConfiguration()
```

Get the installed login Configuration.

**返回**

- the login Configuration.  If a Configuration object was set via the `Configuration.setConfiguration` method, then that object is returned.  Otherwise, a default Configuration object is returned.

**参见**

- #setConfiguration
