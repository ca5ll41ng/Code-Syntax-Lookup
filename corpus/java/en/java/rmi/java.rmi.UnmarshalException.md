---
id: "java-en-function-java-rmi-unmarshalexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.UnmarshalException"
title: "UnmarshalException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/UnmarshalException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnmarshalException

An UnmarshalException can be thrown while unmarshalling the
 parameters or results of a remote method call if any of the following
 conditions occur:
 
 
-  if an exception occurs while unmarshalling the call header
 
-  if the protocol for the return value is invalid
 
-  if a java.io.IOException occurs unmarshalling
 parameters (on the server side) or the return value (on the client side).
 
-  if a java.lang.ClassNotFoundException occurs during
 unmarshalling parameters or return values
 
-  if no skeleton can be loaded on the server-side; note that skeletons
 are required in the 1.1 stub protocol, but not in the 1.2 stub protocol.
 
-  if the method hash is invalid (i.e., missing method).
 
-  if there is a failure to create a remote reference object for
 a remote object's stub when it is unmarshalled.

> *Since 1.1*
