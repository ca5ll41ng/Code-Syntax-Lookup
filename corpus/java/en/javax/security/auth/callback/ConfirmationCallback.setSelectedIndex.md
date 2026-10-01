---
id: "java-en-function-confirmationcallback-setselectedindex"
language: "java"
lang: "en"
category: "function"
name: "ConfirmationCallback.setSelectedIndex"
signature: "public void setSelectedIndex(int selection)"
title: "ConfirmationCallback.setSelectedIndex"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ConfirmationCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfirmationCallback.setSelectedIndex

```java
public void setSelectedIndex(int selection)
```

Set the selected confirmation option.

**参数**

- **selection** — the selection represented as `YES`, `NO`, `OK` or `CANCEL` if an `optionType` was specified to the constructor of this `ConfirmationCallback`. Otherwise, the selection represents the index into the `options` array specified to the constructor of this `ConfirmationCallback`.

**参见**

- #getSelectedIndex
