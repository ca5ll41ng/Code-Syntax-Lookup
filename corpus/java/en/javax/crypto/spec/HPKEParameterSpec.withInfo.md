---
id: "java-en-function-hpkeparameterspec-withinfo"
language: "java"
lang: "en"
category: "function"
name: "HPKEParameterSpec.withInfo"
signature: "public HPKEParameterSpec withInfo(byte[] info)"
title: "HPKEParameterSpec.withInfo"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HPKEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HPKEParameterSpec.withInfo

```java
public HPKEParameterSpec withInfo(byte[] info)
```

Creates a new `HPKEParameterSpec` object with the specified
 `info` value.
 

 For interoperability, RFC 9180 Section 7.2.1 recommends limiting
 this value to a maximum of 64 bytes.

**参数**

- **info** — application-supplied information. The contents of the array are copied to protect against subsequent modification.

**返回**

- a new `HPKEParameterSpec` object

**异常**

- **NullPointerException** — if `info` is `null`
- **IllegalArgumentException** — if `info` is empty.
