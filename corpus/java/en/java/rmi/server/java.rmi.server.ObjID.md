---
id: "java-en-function-java-rmi-server-objid"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.ObjID"
title: "ObjID"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ObjID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjID

An ObjID is used to identify a remote object exported
 to an RMI runtime.  When a remote object is exported, it is assigned
 an object identifier either implicitly or explicitly, depending on
 the API used to export.

 

The `ObjID` constructor can be used to generate a unique
 object identifier.  Such an ObjID is unique over time
 with respect to the host it is generated on.

 The `ObjID` constructor can be used to create a
 "well-known" object identifier.  The scope of a well-known
 ObjID depends on the RMI runtime it is exported to.

 

An ObjID instance contains an object number (of type
 long) and an address space identifier (of type
 `UID`).  In a unique ObjID, the address space
 identifier is unique with respect to a given host over time.  In a
 well-known ObjID, the address space identifier is
 equivalent to one returned by invoking the `UID`
 constructor with the value zero.

 

If the system property {@systemProperty java.rmi.server.randomIDs}
 is defined to equal the string "true" (case insensitive),
 then the `ObjID` constructor will use a cryptographically
 strong random number generator to choose the object number of the
 returned ObjID.

> *Since 1.1*
