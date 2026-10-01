---
id: "java-en-function-choicecallback-choicecallback"
language: "java"
lang: "en"
category: "function"
name: "ChoiceCallback.ChoiceCallback"
signature: "public ChoiceCallback(String prompt, String[] choices, int defaultChoice, boolean multipleSelectionsAllowed)"
title: "ChoiceCallback.ChoiceCallback"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/ChoiceCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceCallback.ChoiceCallback

```java
public ChoiceCallback(String prompt, String[] choices, int defaultChoice, boolean multipleSelectionsAllowed)
```

Construct a `ChoiceCallback` with a prompt,
 a list of choices, a default choice, and a boolean specifying
 whether multiple selections from the list of choices are allowed.

**参数**

- **prompt** — the prompt used to describe the list of choices.
- **choices** — the list of choices. The array is cloned to protect against subsequent modification.
- **defaultChoice** — the choice to be used as the default choice when the list of choices are displayed.  This value is represented as an index into the `choices` array.
- **multipleSelectionsAllowed** — boolean specifying whether multiple selections can be made from the list of choices.

**异常**

- **IllegalArgumentException** — if `prompt` is null, if `prompt` has a length of 0, if `choices` is null, if `choices` has a length of 0, if any element from `choices` is null, if any element from `choices` has a length of 0 or if `defaultChoice` does not fall within the array boundaries of `choices`.
