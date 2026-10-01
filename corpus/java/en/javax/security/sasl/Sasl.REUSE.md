---
id: "java-en-function-sasl-reuse"
language: "java"
lang: "en"
category: "function"
name: "Sasl.REUSE"
signature: "public static final String REUSE = \"javax.security.sasl.reuse\""
title: "Sasl.REUSE"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.REUSE

```java
public static final String REUSE = "javax.security.sasl.reuse"
```

The name of a property that specifies whether to reuse previously
 authenticated session information. The property contains "true" if the
 mechanism implementation may attempt to reuse previously authenticated
 session information; it contains "false" if the implementation must
 not reuse previously authenticated session information.  A setting of
 "true" serves only as a hint: it does not necessarily entail actual
 reuse because reuse might not be possible due to a number of reasons,
 including, but not limited to, lack of mechanism support for reuse,
 expiration of reusable information, and the peer's refusal to support
 reuse.

 The property's default value is "false".  The value of this constant
 is "javax.security.sasl.reuse".

 Note that all other parameters and properties required to create a
 SASL client/server instance must be provided regardless of whether
 this property has been supplied. That is, you cannot supply any less
 information in anticipation of reuse.

 Mechanism implementations that support reuse might allow customization
 of its implementation, for factors such as cache size, timeouts, and
 criteria for reusability. Such customizations are
 implementation-dependent.
