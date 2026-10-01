---
id: "java-en-function-java-nio-file-attribute-aclentry"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.AclEntry"
title: "AclEntry"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AclEntry

An entry in an access control list (ACL).

 

 The ACL entry represented by this class is based on the ACL model
 specified in RFC&nbsp;3530:
 Network File System (NFS) version 4 Protocol. Each entry has four
 components as follows:

 
    
- 

 The `type() type` component determines if the entry
    grants or denies access. 

    
- 

 The `principal() principal` component, sometimes called the
    "who" component, is a `UserPrincipal` corresponding to the identity
    that the entry grants or denies access
    

    
- 

 The `permissions permissions` component is a set of
    `AclEntryPermission permissions`
    

    
- 

 The `flags() flags` component is a set of `AclEntryFlag
    flags` to indicate how entries are inherited and propagated 
 

 

 ACL entries are created using an associated `Builder` object by
 invoking its `build build` method.

 

 ACL entries are immutable and are safe for use by multiple concurrent
 threads.

      RFC 3530: Network File System (NFS) version 4 Protocol

> *Since 1.7*
