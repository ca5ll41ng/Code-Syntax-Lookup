---
id: "java-en-function-confirmationcallback-getselectedindex"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.getSelectedIndex"
signature: "public int getSelectedIndex()"
title: "ConfirmationCallback.getSelectedIndex"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.getSelectedIndex

```java
public int getSelectedIndex()
```

Get the selected confirmation option.

**返回**

- the selected confirmation option represented as `YES`, `NO`, `OK` or `CANCEL` if an `optionType` was specified to the constructor of this `ConfirmationCallback`. Otherwise, this method returns the selected confirmation option as an index into the `options` array specified to the constructor of this `ConfirmationCallback`.

**参见**

- #setSelectedIndex
