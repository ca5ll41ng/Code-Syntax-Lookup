---
id: "java-en-function-realmchoicecallback-realmchoicecallback"
language: "java"
lang: "en"
category: "function"
name: "RealmChoiceCallback.RealmChoiceCallback"
signature: "public RealmChoiceCallback(String prompt, String[]choices, int defaultChoice, boolean multiple)"
title: "RealmChoiceCallback.RealmChoiceCallback"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/RealmChoiceCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RealmChoiceCallback.RealmChoiceCallback

```java
public RealmChoiceCallback(String prompt, String[]choices, int defaultChoice, boolean multiple)
```

Constructs a `RealmChoiceCallback` with a prompt, a list of
 choices and a default choice.

**参数**

- **prompt** — the non-null prompt to use to request the realm.
- **choices** — the non-null list of realms to choose from.
- **defaultChoice** — the choice to be used as the default choice when the list of choices is displayed. It is an index into the `choices` array.
- **multiple** — true if multiple choices allowed; false otherwise

**异常**

- **IllegalArgumentException** — If `prompt` is null or the empty string, if `choices` has a length of 0, if any element from `choices` is null or empty, or if `defaultChoice` does not fall within the array boundary of `choices`
