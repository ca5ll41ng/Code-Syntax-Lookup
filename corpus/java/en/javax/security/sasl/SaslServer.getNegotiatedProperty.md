---
id: "java-en-function-saslserver-getnegotiatedproperty"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.getNegotiatedProperty"
signature: "public abstract Object getNegotiatedProperty(String propName)"
title: "SaslServer.getNegotiatedProperty"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.getNegotiatedProperty

```java
public abstract Object getNegotiatedProperty(String propName)
```

Retrieves the negotiated property.
 This method can be called only after the authentication exchange has
 completed (i.e., when `isComplete()` returns true); otherwise, an
 `IllegalStateException` is thrown.
 

 The `Sasl` class includes several well-known property names
 (For example, `QOP`). A SASL provider can support other
 properties which are specific to the vendor and/or a mechanism.

**参数**

- **propName** — the property

**返回**

- The value of the negotiated property. If null, the property was not negotiated or is not applicable to this mechanism.

**异常**

- **IllegalStateException** — if this authentication exchange has not completed
