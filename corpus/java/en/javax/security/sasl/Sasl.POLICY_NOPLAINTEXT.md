---
id: "java-en-function-sasl-policy_noplaintext"
language: "java"
lang: "en"
category: "function"
name: "Sasl.POLICY_NOPLAINTEXT"
signature: "public static final String POLICY_NOPLAINTEXT = \"javax.security.sasl.policy.noplaintext\""
title: "Sasl.POLICY_NOPLAINTEXT"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.POLICY_NOPLAINTEXT

```java
public static final String POLICY_NOPLAINTEXT = "javax.security.sasl.policy.noplaintext"
```

The name of a property that specifies
 whether mechanisms susceptible to simple plain passive attacks (e.g.,
 "PLAIN") are not permitted. The property
 contains `"true"` if such mechanisms are not permitted;
 `"false"` if such mechanisms are permitted.
 The default is `"false"`.
 
The value of this constant is
 `"javax.security.sasl.policy.noplaintext"`.
