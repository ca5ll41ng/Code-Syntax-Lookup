---
id: "java-en-function-accesscontrolcontext-hashcode"
language: "java"
lang: "en"
category: "function"
name: "AccessControlContext.hashCode"
signature: "public int hashCode()"
title: "AccessControlContext.hashCode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AccessControlContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessControlContext.hashCode

```java
public int hashCode()
```

{@return the hash code value for this context}
 The hash code is computed by exclusive or-ing the hash code of all the
 protection domains in the context together.
