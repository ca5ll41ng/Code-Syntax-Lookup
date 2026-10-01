---
id: "java-en-function-sasl-strength"
language: "java"
lang: "en"
category: "function"
name: "Sasl.STRENGTH"
signature: "public static final String STRENGTH = \"javax.security.sasl.strength\""
title: "Sasl.STRENGTH"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.STRENGTH

```java
public static final String STRENGTH = "javax.security.sasl.strength"
```

The name of a property that specifies the cipher strength to use.
 The property contains a comma-separated, ordered list
 of cipher strength values that
 the client or server is willing to support. A strength value is one of
 
 
- `"low"`
 
- `"medium"`
 
- `"high"`
 

 The order of the list specifies the preference order of the client or
 server.  An implementation should allow configuration of the meaning
 of these values.  An application may use the Java Cryptography
 Extension (JCE) with JCE-aware mechanisms to control the selection of
 cipher suites that match the strength values.
 

 If this property is absent, the default strength is
 `"high,medium,low"`.
 The value of this constant is `"javax.security.sasl.strength"`.
