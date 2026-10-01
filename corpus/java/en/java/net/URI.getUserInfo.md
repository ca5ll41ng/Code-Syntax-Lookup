---
id: "java-en-function-uri-getuserinfo"
language: "java"
lang: "en"
category: "function"
name: "URI.getUserInfo"
signature: "public String getUserInfo()"
title: "URI.getUserInfo"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getUserInfo

```java
public String getUserInfo()
```

Returns the decoded user-information component of this URI.

 

 The string returned by this method is equal to that returned by the
 `getRawUserInfo() getRawUserInfo` method except that all
 sequences of escaped octets are decoded.

**返回**

- The decoded user-information component of this URI, or `null` if the user information is undefined
