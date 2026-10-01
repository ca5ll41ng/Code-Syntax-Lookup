---
id: "java-en-function-exemptionmechanism-iscryptoallowed"
language: "java"
lang: "en"
category: "function"
name: "ExemptionMechanism.isCryptoAllowed"
signature: "public final boolean isCryptoAllowed(Key key) throws ExemptionMechanismException"
title: "ExemptionMechanism.isCryptoAllowed"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/ExemptionMechanism.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExemptionMechanism.isCryptoAllowed

```java
public final boolean isCryptoAllowed(Key key) throws ExemptionMechanismException
```

Returns whether the result blob has been generated successfully by this
 exemption mechanism.

 

The method also makes sure that the key passed in is the same as
 the one this exemption mechanism used in initializing and generating
 phases.

**参数**

- **key** — the key the crypto is going to use.

**返回**

- whether the result blob of the same key has been generated successfully by this exemption mechanism; `false` if `key` is `null`.

**异常**

- **ExemptionMechanismException** — if problem(s) encountered while determining whether the result blob has been generated successfully by this exemption mechanism object.
