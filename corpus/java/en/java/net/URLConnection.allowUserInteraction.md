---
id: "java-en-function-urlconnection-allowuserinteraction"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.allowUserInteraction"
signature: "protected boolean allowUserInteraction = defaultAllowUserInteraction"
title: "URLConnection.allowUserInteraction"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.allowUserInteraction

```java
protected boolean allowUserInteraction = defaultAllowUserInteraction
```

If `true`, this `URL` is being examined in
 a context in which it makes sense to allow user interactions such
 as popping up an authentication dialog. If `false`,
 then no user interaction is allowed.
 

 The value of this field can be set by the
 `setAllowUserInteraction` method.
 Its value is returned by the
 `getAllowUserInteraction` method.
 Its default value is the value of the argument in the last invocation
 of the `setDefaultAllowUserInteraction` method.

**参见**

- java.net.URLConnection#getAllowUserInteraction()
- java.net.URLConnection#setAllowUserInteraction(boolean)
- java.net.URLConnection#setDefaultAllowUserInteraction(boolean)
