---
id: "java-en-function-javax-net-ssl-snihostname"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SNIHostName"
title: "SNIHostName"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName

Instances of this class represent a server name of type
 `SNI_HOST_NAME host_name` in a Server Name
 Indication (SNI) extension.
 

 As described in section 3, "Server Name Indication", of
 TLS Extensions (RFC 6066),
 "HostName" contains the fully qualified DNS hostname of the server, as
 understood by the client.  The encoded server name value of a hostname is
 represented as a byte string using ASCII encoding without a trailing dot.
 This allows the support of Internationalized Domain Names (IDN) through
 the use of A-labels (the ASCII-Compatible Encoding (ACE) form of a valid
 string of Internationalized Domain Names for Applications (IDNA)) defined
 in RFC 5890.
 

 Note that `SNIHostName` objects are immutable.

      RFC 5890: Internationalized Domain Names for Applications (IDNA):
              Definitions and Document Framework
      RFC 6066: Transport Layer Security (TLS) Extensions: Extension Definitions

**参见**

- SNIServerName
- StandardConstants#SNI_HOST_NAME

> *Since 1.8*
