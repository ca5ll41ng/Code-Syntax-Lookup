---
id: "java-en-function-policy-gettype"
language: "java"
lang: "en"
category: "function"
name: "Policy.getType"
signature: "public String getType()"
title: "Policy.getType"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.getType

```java
public String getType()
```

Return the type of this `Policy`.

 

 This `Policy` instance will only have a type if it
 was obtained via a call to `Policy.getInstance`.
 Otherwise this method returns `null`.

**返回**

- the type of this `Policy`, or `null`.

> *Since 1.6*
