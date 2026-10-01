---
id: "java-en-function-uri-getfragment"
language: "java"
lang: "en"
category: "function"
name: "URI.getFragment"
signature: "public String getFragment()"
title: "URI.getFragment"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getFragment

```java
public String getFragment()
```

Returns the decoded fragment component of this URI.

 

 The string returned by this method is equal to that returned by the
 `getRawFragment() getRawFragment` method except that all
 sequences of escaped octets are decoded.

**返回**

- The decoded fragment component of this URI, or `null` if the fragment is undefined
