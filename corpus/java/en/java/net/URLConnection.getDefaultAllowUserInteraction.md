---
id: "java-en-function-urlconnection-getdefaultallowuserinteraction"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getDefaultAllowUserInteraction"
signature: "public static boolean getDefaultAllowUserInteraction()"
title: "URLConnection.getDefaultAllowUserInteraction"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getDefaultAllowUserInteraction

```java
public static boolean getDefaultAllowUserInteraction()
```

Returns the default value of the `allowUserInteraction`
 field.
 

 This default is "sticky", being a part of the static state of all
 URLConnections.  This flag applies to the next, and all following
 URLConnections that are created.

**返回**

- the default value of the `allowUserInteraction` field.

**参见**

- #setDefaultAllowUserInteraction(boolean)
