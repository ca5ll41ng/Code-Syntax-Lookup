---
id: "java-en-function-saslserverfactory-getmechanismnames"
language: "java"
lang: "en"
category: "function"
name: "SaslServerFactory.getMechanismNames"
signature: "public abstract String[] getMechanismNames(Map<String,?> props)"
title: "SaslServerFactory.getMechanismNames"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServerFactory.getMechanismNames

```java
public abstract String[] getMechanismNames(Map<String,?> props)
```

Returns an array of names of mechanisms that match the specified
 mechanism selection policies.

**参数**

- **props** — The possibly null set of properties used to specify the security policy of the SASL mechanisms. For example, if `props` contains the `Sasl.POLICY_NOPLAINTEXT` property with the value `"true"`, then the factory must not return any SASL mechanisms that are susceptible to simple plain passive attacks. See the `Sasl` class for a complete list of policy properties. Non-policy related properties, if present in `props`, are ignored, including any map entries with non-String keys.

**返回**

- A non-null array containing a IANA-registered SASL mechanism names.
