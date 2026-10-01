---
id: "java-en-function-hpkeparameterspec-withpsk"
language: "java"
lang: "en"
category: "function"
name: "HPKEParameterSpec.withPsk"
signature: "public HPKEParameterSpec withPsk(SecretKey psk, byte[] psk_id)"
title: "HPKEParameterSpec.withPsk"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HPKEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HPKEParameterSpec.withPsk

```java
public HPKEParameterSpec withPsk(SecretKey psk, byte[] psk_id)
```

Creates a new `HPKEParameterSpec` object with the specified
 `psk` and `psk_id` values.
 

 RFC 9180 Section 5.1.2 requires the PSK MUST have at least 32 bytes
 of entropy. For interoperability, RFC 9180 Section 7.2.1 recommends
 limiting the key size and identifier length to a maximum of 64 bytes.

**参数**

- **psk** — pre-shared key
- **psk_id** — identifier for PSK. The contents of the array are copied to protect against subsequent modification.

**返回**

- a new `HPKEParameterSpec` object

**异常**

- **NullPointerException** — if `psk` or `psk_id` is `null`
- **IllegalArgumentException** — if `psk` is shorter than 32 bytes or `psk_id` is empty
