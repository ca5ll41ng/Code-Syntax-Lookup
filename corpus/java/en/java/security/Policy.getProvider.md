---
id: "java-en-function-policy-getprovider"
language: "java"
lang: "en"
category: "function"
name: "Policy.getProvider"
signature: "public Provider getProvider()"
title: "Policy.getProvider"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.getProvider

```java
public Provider getProvider()
```

Return the `Provider` of this policy.

 

 This `Policy` instance will only have a provider if it
 was obtained via a call to `Policy.getInstance`.
 Otherwise this method returns `null`.

**返回**

- the `Provider` of this policy, or `null`.

> *Since 1.6*
