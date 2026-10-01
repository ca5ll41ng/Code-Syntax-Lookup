---
id: "java-en-function-confirmationcallback-getdefaultoption"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.getDefaultOption"
signature: "public int getDefaultOption()"
title: "ConfirmationCallback.getDefaultOption"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.getDefaultOption

```java
public int getDefaultOption()
```

Get the default option.

**返回**

- the default option, represented as `YES`, `NO`, `OK` or `CANCEL` if an `optionType` was specified to the constructor of this `ConfirmationCallback`. Otherwise, this method returns the default option as an index into the `options` array specified to the constructor of this `ConfirmationCallback`.
