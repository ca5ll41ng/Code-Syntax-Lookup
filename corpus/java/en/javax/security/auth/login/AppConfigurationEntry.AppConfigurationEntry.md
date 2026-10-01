---
id: "java-en-function-appconfigurationentry-appconfigurationentry"
language: "java"
lang: "en"
category: "function"
name: "AppConfigurationEntry.AppConfigurationEntry"
signature: "public AppConfigurationEntry(String loginModuleName, LoginModuleControlFlag controlFlag, Map<String,?> options)"
title: "AppConfigurationEntry.AppConfigurationEntry"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/AppConfigurationEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AppConfigurationEntry.AppConfigurationEntry

```java
public AppConfigurationEntry(String loginModuleName, LoginModuleControlFlag controlFlag, Map<String,?> options)
```

Default constructor for this class.

 

 This entry represents a single `LoginModule`
 entry configured for the application specified in the
 `getAppConfigurationEntry(String appName)`
 method from the `Configuration` class.

**参数**

- **loginModuleName** — String representing the class name of the `LoginModule` configured for the specified application.
- **controlFlag** — either REQUIRED, REQUISITE, SUFFICIENT, or OPTIONAL.
- **options** — the options configured for this `LoginModule`.

**异常**

- **IllegalArgumentException** — if `loginModuleName` is null, if `LoginModuleName` has a length of 0, if `controlFlag` is not either REQUIRED, REQUISITE, SUFFICIENT or OPTIONAL, or if `options` is null.
