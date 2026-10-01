---
id: "java-en-function-sasl-policy_nodictionary"
language: "java"
lang: "en"
category: "function"
name: "Sasl.POLICY_NODICTIONARY"
signature: "public static final String POLICY_NODICTIONARY = \"javax.security.sasl.policy.nodictionary\""
title: "Sasl.POLICY_NODICTIONARY"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.POLICY_NODICTIONARY

```java
public static final String POLICY_NODICTIONARY = "javax.security.sasl.policy.nodictionary"
```

The name of a property that specifies whether
 mechanisms susceptible to passive dictionary attacks are not permitted.
 The property contains `"true"`
 if mechanisms susceptible to dictionary attacks are not permitted;
 `"false"` if such mechanisms are permitted.
 The default is `"false"`.

 The value of this constant is
 `"javax.security.sasl.policy.nodictionary"`.
