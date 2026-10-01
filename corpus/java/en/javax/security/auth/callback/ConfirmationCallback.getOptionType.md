---
id: "java-en-function-confirmationcallback-getoptiontype"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.getOptionType"
signature: "public int getOptionType()"
title: "ConfirmationCallback.getOptionType"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.getOptionType

```java
public int getOptionType()
```

Get the option type.

 

 If this method returns `UNSPECIFIED_OPTION`, then this
 `ConfirmationCallback` was instantiated with
 `options` instead of an `optionType`.
 In this case, invoke the `getOptions` method
 to determine which confirmation options to display.

**返回**

- the option type (`YES_NO_OPTION`, `YES_NO_CANCEL_OPTION` or `OK_CANCEL_OPTION`), or `UNSPECIFIED_OPTION` if this `ConfirmationCallback` was instantiated with `options` instead of an `optionType`.
