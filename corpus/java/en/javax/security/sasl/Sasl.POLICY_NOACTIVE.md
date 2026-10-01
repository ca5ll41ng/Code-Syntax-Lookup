---
id: "java-en-function-sasl-policy_noactive"
language: "java"
lang: "en"
category: "function"
name: "Sasl.POLICY_NOACTIVE"
signature: "public static final String POLICY_NOACTIVE = \"javax.security.sasl.policy.noactive\""
title: "Sasl.POLICY_NOACTIVE"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.POLICY_NOACTIVE

```java
public static final String POLICY_NOACTIVE = "javax.security.sasl.policy.noactive"
```

The name of a property that specifies whether
 mechanisms susceptible to active (non-dictionary) attacks
 are not permitted.
 The property contains `"true"`
 if mechanisms susceptible to active attacks
 are not permitted; `"false"` if such mechanisms are permitted.
 The default is `"false"`.
 
The value of this constant is
 `"javax.security.sasl.policy.noactive"`.
