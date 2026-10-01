---
id: "java-en-function-confirmationcallback-yes_no_cancel_option"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.YES_NO_CANCEL_OPTION"
signature: "public static final int YES_NO_CANCEL_OPTION = 1"
title: "ConfirmationCallback.YES_NO_CANCEL_OPTION"
directive: "field"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.YES_NO_CANCEL_OPTION

```java
public static final int YES_NO_CANCEL_OPTION = 1
```

YES/NO/CANCEL confirmation option.

 

 An underlying security service specifies this as the
 `optionType` to a `ConfirmationCallback`
 constructor if it requires a confirmation which can be answered
 with either `YES`, `NO` or `CANCEL`.
