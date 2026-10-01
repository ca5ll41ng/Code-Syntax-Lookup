---
id: "java-en-function-decapsulator-encapsulationsize"
language: "java"
lang: "en"
category: "function"
name: "Decapsulator.encapsulationSize"
signature: "public int encapsulationSize()"
title: "Decapsulator.encapsulationSize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Decapsulator.encapsulationSize

```java
public int encapsulationSize()
```

Returns the size of the key encapsulation message.
 

 This method can be used to extract the encapsulation message
 from a longer byte array if no length information is provided
 by a higher level protocol.

**返回**

- the size of the key encapsulation message
