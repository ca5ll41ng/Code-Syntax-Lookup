---
id: "java-en-function-sasl-max_buffer"
language: "java"
lang: "en"
category: "function"
name: "Sasl.MAX_BUFFER"
signature: "public static final String MAX_BUFFER = \"javax.security.sasl.maxbuffer\""
title: "Sasl.MAX_BUFFER"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.MAX_BUFFER

```java
public static final String MAX_BUFFER = "javax.security.sasl.maxbuffer"
```

The name of a property that specifies the maximum size of the receive
 buffer in bytes of `SaslClient`/`SaslServer`.
 The property contains the string representation of an integer.
 
If this property is absent, the default size
 is defined by the mechanism.
 
The value of this constant is `"javax.security.sasl.maxbuffer"`.
