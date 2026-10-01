---
id: "java-en-function-java-rmi-marshalexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.MarshalException"
title: "MarshalException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/MarshalException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MarshalException

A MarshalException is thrown if a
 java.io.IOException occurs while marshalling the remote call
 header, arguments or return value for a remote method call.  A
 MarshalException is also thrown if the receiver does not
 support the protocol version of the sender.

 

If a MarshalException occurs during a remote method call,
 the call may or may not have reached the server.  If the call did reach the
 server, parameters may have been deserialized.  A call may not be
 retransmitted after a MarshalException and reliably preserve
 "at most once" call semantics.

> *Since 1.1*
