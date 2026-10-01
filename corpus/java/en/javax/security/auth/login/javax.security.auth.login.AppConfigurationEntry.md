---
id: "java-en-function-javax-security-auth-login-appconfigurationentry"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.login.AppConfigurationEntry"
title: "AppConfigurationEntry"
directive: "type"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/AppConfigurationEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AppConfigurationEntry

This class represents a single `LoginModule` entry
 configured for the application specified in the
 `getAppConfigurationEntry(String appName)`
 method in the `Configuration` class.  Each respective
 `AppConfigurationEntry` contains a `LoginModule` name,
 a control flag (specifying whether this `LoginModule` is
 REQUIRED, REQUISITE, SUFFICIENT, or OPTIONAL), and LoginModule-specific
 options.  Please refer to the `Configuration` class for
 more information on the different control flags and their semantics.

**参见**

- javax.security.auth.login.Configuration

> *Since 1.4*
