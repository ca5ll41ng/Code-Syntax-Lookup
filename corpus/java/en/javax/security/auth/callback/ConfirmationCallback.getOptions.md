---
id: "java-en-function-confirmationcallback-getoptions"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.getOptions"
signature: "public String[] getOptions()"
title: "ConfirmationCallback.getOptions"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.getOptions

```java
public String[] getOptions()
```

Get the confirmation options.

**返回**

- a copy of the list of confirmation options, or null if this `ConfirmationCallback` was instantiated with an `optionType` instead of `options`.
