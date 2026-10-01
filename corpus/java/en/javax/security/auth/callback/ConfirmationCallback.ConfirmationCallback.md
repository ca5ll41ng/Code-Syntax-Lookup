---
id: "java-en-function-confirmationcallback-confirmationcallback"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.ConfirmationCallback"
signature: "public ConfirmationCallback(int messageType, int optionType, int defaultOption)"
title: "ConfirmationCallback.ConfirmationCallback"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.ConfirmationCallback

```java
public ConfirmationCallback(int messageType, int optionType, int defaultOption)
```

Construct a `ConfirmationCallback` with a
 message type, an option type and a default option.

 

 Underlying security services use this constructor if
 they require either a YES/NO, YES/NO/CANCEL or OK/CANCEL
 confirmation.

**参数**

- **messageType** — the message type (`INFORMATION`, `WARNING` or `ERROR`).
- **optionType** — the option type (`YES_NO_OPTION`, `YES_NO_CANCEL_OPTION` or `OK_CANCEL_OPTION`).
- **defaultOption** — the default option from the provided optionType (`YES`, `NO`, `CANCEL` or `OK`).

**异常**

- **IllegalArgumentException** — if messageType is not either `INFORMATION`, `WARNING`, or `ERROR`, if optionType is not either `YES_NO_OPTION`, `YES_NO_CANCEL_OPTION`, or `OK_CANCEL_OPTION`, or if `defaultOption` does not correspond to one of the options in `optionType`.
