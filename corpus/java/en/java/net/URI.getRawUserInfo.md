---
id: "java-en-function-uri-getrawuserinfo"
language: "java"
lang: "en"
category: "function"
name: "URI.getRawUserInfo"
signature: "public String getRawUserInfo()"
title: "URI.getRawUserInfo"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getRawUserInfo

```java
public String getRawUserInfo()
```

Returns the raw user-information component of this URI.

 

 The user-information component of a URI, if defined, only contains
 characters in the unreserved, punct, escaped, and
 other categories.

**返回**

- The raw user-information component of this URI, or `null` if the user information is undefined
