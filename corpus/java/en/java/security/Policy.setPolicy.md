---
id: "java-en-function-policy-setpolicy"
language: "java"
lang: "en"
category: "function"
name: "Policy.setPolicy"
signature: "public static void setPolicy(Policy p)"
title: "Policy.setPolicy"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.setPolicy

```java
public static void setPolicy(Policy p)
```

Throws `UnsupportedOperationException`. Setting a system-wide
 `Policy` object is not supported.

    `Policy` object. Installing a system-wide `Policy` object
    is no longer supported. A `Policy` object was only useful in
    conjunction with `SecurityManager the Security Manager`,
    which is no longer supported. There is no replacement for this method.

**参数**

- **p** — ignored

**异常**

- **UnsupportedOperationException** — always

**参见**

- #getPolicy()
