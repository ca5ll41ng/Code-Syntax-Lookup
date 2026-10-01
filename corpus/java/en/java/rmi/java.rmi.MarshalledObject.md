---
id: "java-en-function-java-rmi-marshalledobject"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.MarshalledObject"
title: "MarshalledObject"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/MarshalledObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MarshalledObject

A MarshalledObject contains a byte stream with the serialized
 representation of an object given to its constructor.  The get
 method returns a new copy of the original object, as deserialized from
 the contained byte stream.  The contained object is serialized and
 deserialized with the same serialization semantics used for marshaling
 and unmarshaling parameters and return values of RMI calls:  When the
 serialized form is created:

 
 
-  classes are annotated with a codebase URL from where the class
      can be loaded (if available), and
 
-  any remote object in the MarshalledObject is
      represented by a serialized instance of its stub.
 

 

When copy of the object is retrieved (via the get method),
 if the class is not available locally, it will be loaded from the
 appropriate location (specified the URL annotated with the class descriptor
 when the class was serialized.

 

MarshalledObject facilitates passing objects in RMI calls
 that are not automatically deserialized immediately by the remote peer.

**参数**

- **the** — type of the object contained in this MarshalledObject

> *Since 1.2*
