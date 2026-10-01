---
id: "java-en-function-standardconstants-sni_host_name"
language: "java"
lang: "en"
category: "function"
name: "StandardConstants.SNI_HOST_NAME"
signature: "public static final int SNI_HOST_NAME = 0x00"
title: "StandardConstants.SNI_HOST_NAME"
directive: "field"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/StandardConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardConstants.SNI_HOST_NAME

```java
public static final int SNI_HOST_NAME = 0x00
```

The "host_name" type representing of a DNS hostname
 (see `SNIHostName`) in a Server Name Indication (SNI) extension.
 

 The SNI extension is a feature that extends the SSL/TLS protocols to
 indicate what server name the client is attempting to connect to during
 handshaking.  See section 3, "Server Name Indication", of TLS Extensions (RFC 6066).
 

 The value of this constant is ``.

      RFC 6066: Transport Layer Security (TLS) Extensions: Extension Definitions

**参见**

- SNIServerName
- SNIHostName
