---
id: "java-en-function-java-nio-file-attribute-aclfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.AclFileAttributeView"
title: "AclFileAttributeView"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AclFileAttributeView

A file attribute view that supports reading or updating a file's Access
 Control Lists (ACL) or file owner attributes.

 

 ACLs are used to specify access rights to file system objects. An ACL is
 an ordered list of `AclEntry access-control-entries`, each specifying a
 `UserPrincipal` and the level of access for that user principal. This
 file attribute view defines the `getAcl() getAcl`, and `setAcl(List) setAcl` methods to read and write ACLs based on the ACL
 model specified in RFC&nbsp;3530:
 Network File System (NFS) version 4 Protocol. This file attribute view
 is intended for file system implementations that support the NFSv4 ACL model
 or have a well-defined mapping between the NFSv4 ACL model and the ACL
 model used by the file system. The details of such mapping are implementation
 dependent and are therefore unspecified.

 

 This class also extends `FileOwnerAttributeView` so as to define
 methods to get and set the file owner.

 

 When a file system provides access to a set of `FileStore
 file-systems` that are not homogeneous then only some of the file systems may
 support ACLs. The `supportsFileAttributeView
 supportsFileAttributeView` method can be used to test if a file system
 supports ACLs.

 Interoperability

 RFC&nbsp;3530 allows for special user identities to be used on platforms that
 support the POSIX defined access permissions. The special user identities
 are "`OWNER@`", "`GROUP@`", and "`EVERYONE@`". When both
 the `AclFileAttributeView` and the `PosixFileAttributeView`
 are supported then these special user identities may be included in ACL `AclEntry entries` that are read or written. The file system's `UserPrincipalLookupService` may be used to obtain a `UserPrincipal`
 to represent these special identities by invoking the `lookupPrincipalByName lookupPrincipalByName`
 method.

 

 **Usage Example:**
 Suppose we wish to add an entry to an existing ACL to grant "joe" access:
 {@snippet lang=java :
     // lookup "joe"
     UserPrincipal joe = file.getFileSystem().getUserPrincipalLookupService()
         .lookupPrincipalByName("joe");

     // get view
     AclFileAttributeView view = Files.getFileAttributeView(file, AclFileAttributeView.class);

     // create ACE to give "joe" read access
     AclEntry entry = AclEntry.newBuilder()
         .setType(AclEntryType.ALLOW)
         .setPrincipal(joe)
         .setPermissions(AclEntryPermission.READ_DATA, AclEntryPermission.READ_ATTRIBUTES)
         .build();

     // read ACL, insert ACE, re-write ACL
     List acl = view.getAcl();
     acl.add(0, entry);   // insert before any DENY entries
     view.setAcl(acl);
 }

  Dynamic Access 
 

 Where dynamic access to file attributes is required, the attributes
 supported by this attribute view are as follows:
 
 
 Supported attributes
 
   
      Name 
      Type 
   
 
 
   
      "acl" 
      `List`&lt;`AclEntry`&gt; 
   
   
      "owner" 
      `UserPrincipal` 
   
 
 
 

 

 The `getAttribute getAttribute` method may be used to read
 the ACL or owner attributes as if by invoking the `getAcl getAcl` or
 `getOwner getOwner` methods.

 

 The `setAttribute setAttribute` method may be used to
 update the ACL or owner attributes as if by invoking the `setAcl setAcl`
 or `setOwner setOwner` methods.

  Setting the ACL when creating a file 

 

 Implementations supporting this attribute view may also support setting
 the initial ACL when creating a file or directory. The initial ACL
 may be provided to methods such as `createFile createFile` or `createDirectory createDirectory` as an `FileAttribute` with `name name` `"acl:acl"` and a `value
 value` that is the list of `AclEntry` objects.

 

 Where an implementation supports an ACL model that differs from the NFSv4
 defined ACL model then setting the initial ACL when creating the file must
 translate the ACL to the model supported by the file system. Methods that
 create a file should reject (by throwing `IOException IOException`)
 any attempt to create a file that would be less secure as a result of the
 translation.

      RFC 3530: Network File System (NFS) version 4 Protocol

> *Since 1.7*
