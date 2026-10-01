---
id: "java-en-function-sasl-policy_forward_secrecy"
language: "java"
lang: "en"
category: "function"
name: "Sasl.POLICY_FORWARD_SECRECY"
signature: "public static final String POLICY_FORWARD_SECRECY = \"javax.security.sasl.policy.forward\""
title: "Sasl.POLICY_FORWARD_SECRECY"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.POLICY_FORWARD_SECRECY

```java
public static final String POLICY_FORWARD_SECRECY = "javax.security.sasl.policy.forward"
```

The name of a property that specifies whether mechanisms that implement
 forward secrecy between sessions are required. Forward secrecy
 means that breaking into one session will not automatically
 provide information for breaking into future sessions.
 The property
 contains `"true"` if mechanisms that implement forward secrecy
 between sessions are required; `"false"` if such mechanisms
 are not required. The default is `"false"`.

 The value of this constant is
 `"javax.security.sasl.policy.forward"`.
