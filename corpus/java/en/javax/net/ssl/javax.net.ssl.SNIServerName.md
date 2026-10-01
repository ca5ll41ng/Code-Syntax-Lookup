---
id: "java-en-function-javax-net-ssl-sniservername"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SNIServerName"
title: "SNIServerName"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIServerName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIServerName

Instances of this class represent a server name in a Server Name
 Indication (SNI) extension.
 

 The SNI extension is a feature that extends the SSL/TLS/DTLS protocols to
 indicate what server name the client is attempting to connect to during
 handshaking.  See section 3, "Server Name Indication", of TLS Extensions (RFC 6066).
 

 `SNIServerName` objects are immutable.  Subclasses should not provide
 methods that can change the state of an instance once it has been created.

      RFC 6066: Transport Layer Security (TLS) Extensions: Extension Definitions

**参见**

- SSLParameters#getServerNames()
- SSLParameters#setServerNames(List)

> *Since 1.8*
