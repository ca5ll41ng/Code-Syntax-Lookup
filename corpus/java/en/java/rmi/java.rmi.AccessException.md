---
id: "java-en-function-java-rmi-accessexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.AccessException"
title: "AccessException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/AccessException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessException

An AccessException is thrown by certain methods of the
 java.rmi.Naming class (specifically bind,
 rebind, and unbind) to
 indicate that the caller does not have permission to perform the action
 requested by the method call.  If the method was invoked from a non-local
 host, then an AccessException is thrown.

**参见**

- java.rmi.Naming

> *Since 1.1*
