---
id: "java-en-function-securerandom-getinstancestrong"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.getInstanceStrong"
signature: "public static SecureRandom getInstanceStrong() throws NoSuchAlgorithmException"
title: "SecureRandom.getInstanceStrong"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.getInstanceStrong

```java
public static SecureRandom getInstanceStrong() throws NoSuchAlgorithmException
```

Returns a `SecureRandom` object that was selected by using
 the algorithms/providers specified in the `securerandom.strongAlgorithms` `Security` property.
 

 Some situations require strong random values, such as when
 creating high-value/long-lived secrets like RSA public/private
 keys.  To help guide applications in selecting a suitable strong
 `SecureRandom` implementation, Java distributions
 include a list of known strong `SecureRandom`
 implementations in the `securerandom.strongAlgorithms`
 Security property.
 

 Every implementation of the Java platform is required to
 support at least one strong `SecureRandom` implementation.

**返回**

- a strong `SecureRandom` implementation as indicated by the `securerandom.strongAlgorithms` Security property

**异常**

- **NoSuchAlgorithmException** — if no algorithm is available

**参见**

- Security#getProperty(String)

> *Since 1.8*
