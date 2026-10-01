---
id: "java-en-function-java-rmi-server-uid"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.UID"
title: "UID"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UID

A UID represents an identifier that is unique over time
 with respect to the host it is generated on, or one of 216
 "well-known" identifiers.

 

The `UID` constructor can be used to generate an
 identifier that is unique over time with respect to the host it is
 generated on.  The `UID` constructor can be used to
 create one of 216 well-known identifiers.

 

A UID instance contains three primitive values:
 
 
- unique, an int that uniquely identifies
 the VM that this UID was generated in, with respect to its
 host and at the time represented by the time value (an
 example implementation of the unique value would be a
 process identifier),
  or zero for a well-known UID
 
- time, a long equal to a time (as returned
 by `currentTimeMillis`) at which the VM that this
 UID was generated in was alive,
 or zero for a well-known UID
 
- count, a short to distinguish
 UIDs generated in the same VM with the same
 time value
 

 

An independently generated UID instance is unique
 over time with respect to the host it is generated on as long as
 the host requires more than one millisecond to reboot and its system
 clock is never set backward.  A globally unique identifier can be
 constructed by pairing a UID instance with a unique host
 identifier, such as an IP address.

> *Since 1.1*
