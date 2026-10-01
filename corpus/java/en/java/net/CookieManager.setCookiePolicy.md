---
id: "java-en-function-cookiemanager-setcookiepolicy"
language: "java"
lang: "en"
category: "function"
name: "CookieManager.setCookiePolicy"
signature: "public void setCookiePolicy(CookiePolicy cookiePolicy)"
title: "CookieManager.setCookiePolicy"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieManager.setCookiePolicy

```java
public void setCookiePolicy(CookiePolicy cookiePolicy)
```

To set the cookie policy of this cookie manager.

 

 An instance of `CookieManager` will have
 cookie policy ACCEPT_ORIGINAL_SERVER by default. Users always
 can call this method to set another cookie policy.

**参数**

- **cookiePolicy** — the cookie policy. Can be `null`, which has no effects on current cookie policy.
