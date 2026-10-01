---
id: "java-en-function-choicecallback-setselectedindexes"
language: "java"
lang: "en"
category: "function"
name: "ChoiceCallback.setSelectedIndexes"
signature: "public void setSelectedIndexes(int[] selections)"
title: "ChoiceCallback.setSelectedIndexes"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ChoiceCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceCallback.setSelectedIndexes

```java
public void setSelectedIndexes(int[] selections)
```

Set the selected choices.

**参数**

- **selections** — the selections represented as indexes into the `choices` list. The array is cloned to protect against subsequent modification.

**异常**

- **UnsupportedOperationException** — if multiple selections are not allowed, as determined by `allowMultipleSelections`.

**参见**

- #getSelectedIndexes
