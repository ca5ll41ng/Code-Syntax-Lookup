---
id: "java-en-function-securerandom-securerandom"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.SecureRandom"
signature: "public SecureRandom()"
title: "SecureRandom.SecureRandom"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.SecureRandom

```java
public SecureRandom()
```

Constructs a secure random number generator (RNG) implementing the
 default random number algorithm.

 

 This constructor traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new `SecureRandom` object encapsulating the
 `SecureRandomSpi` implementation from the first provider
 that supports a `SecureRandom` (RNG) algorithm is returned.
 If none of the providers support an RNG algorithm,
 then an implementation-specific default is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 

 See the `SecureRandom` section in the 
 Java Security Standard Algorithm Names Specification
 for information about standard RNG algorithm names.
