---
id: "java-en-function-hpkeparameterspec-withencapsulation"
language: "java"
lang: "en"
category: "function"
name: "HPKEParameterSpec.withEncapsulation"
signature: "public HPKEParameterSpec withEncapsulation(byte[] encapsulation)"
title: "HPKEParameterSpec.withEncapsulation"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HPKEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HPKEParameterSpec.withEncapsulation

```java
public HPKEParameterSpec withEncapsulation(byte[] encapsulation)
```

Creates a new `HPKEParameterSpec` object with the specified
 key encapsulation message value that will be used by the recipient.

**参数**

- **encapsulation** — the key encapsulation message. The contents of the array are copied to protect against subsequent modification.

**返回**

- a new `HPKEParameterSpec` object

**异常**

- **NullPointerException** — if `encapsulation` is `null`
