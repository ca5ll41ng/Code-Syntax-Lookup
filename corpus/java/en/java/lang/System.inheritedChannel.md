---
id: "java-en-function-system-inheritedchannel"
language: "java"
lang: "en"
category: "function"
name: "System.inheritedChannel"
signature: "public static Channel inheritedChannel() throws IOException"
title: "System.inheritedChannel"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.inheritedChannel

```java
public static Channel inheritedChannel() throws IOException
```

Returns the channel inherited from the entity that created this
 Java virtual machine.

 This method returns the channel obtained by invoking the
 `inheritedChannel
 inheritedChannel` method of the system-wide default
 `java.nio.channels.spi.SelectorProvider` object.

 

 In addition to the network-oriented channels described in
 `inheritedChannel
 inheritedChannel`, this method may return other kinds of
 channels in the future.

**返回**

- The inherited channel, if any, otherwise `null`.

**异常**

- **IOException** — If an I/O error occurs

> *Since 1.5*
