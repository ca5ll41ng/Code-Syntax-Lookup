---
id: "java-en-function-javax-naming-refaddr"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.RefAddr"
title: "RefAddr"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/RefAddr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RefAddr

This class represents the address of a communications end-point.
 It consists of a type that describes the communication mechanism
 and an address contents determined by an RefAddr subclass.

 For example, an address type could be "BSD Printer Address",
 which specifies that it is an address to be used with the BSD printing
 protocol. Its contents could be the machine name identifying the
 location of the printer server that understands this protocol.

 A RefAddr is contained within a Reference.

 RefAddr is an abstract class. Concrete implementations of it
 determine its synchronization properties.

**参见**

- Reference
- LinkRef
- StringRefAddr
- BinaryRefAddr

> *Since 1.3*
