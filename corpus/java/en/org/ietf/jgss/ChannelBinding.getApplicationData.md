---
id: "java-en-function-channelbinding-getapplicationdata"
language: "java"
lang: "en"
category: "function"
name: "ChannelBinding.getApplicationData"
signature: "public byte[] getApplicationData()"
title: "ChannelBinding.getApplicationData"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/ChannelBinding.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChannelBinding.getApplicationData

```java
public byte[] getApplicationData()
```

Get the application specified data for this channel binding.

**返回**

- the application data being used as part of the ChannelBinding. null is returned if no application data has been specified for the channel binding.
