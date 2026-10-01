---
id: "java-en-function-org-ietf-jgss-gssname"
language: "java"
lang: "en"
category: "function"
name: "org.ietf.jgss.GSSName"
title: "GSSName"
directive: "type"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSName

This interface encapsulates a single GSS-API principal entity. The
 application obtains an implementation of this interface
 through one of the createName methods that exist in the `GSSManager GSSManager` class. Conceptually a GSSName contains many
 representations of the entity or many primitive name elements, one for
 each supported underlying mechanism. In GSS terminology, a GSSName that
 contains an element from just one mechanism is called a Mechanism Name
 (MN)

 Since different authentication mechanisms may employ different
 namespaces for identifying their principals, GSS-API's naming support is
 necessarily complex in multi-mechanism environments (or even in some
 single-mechanism environments where the underlying mechanism supports
 multiple namespaces). Different name formats and their definitions are
 identified with `Oid Oid's` and some standard types
 are defined in this interface. The format of the names can be derived
 based on the unique Oid of its name type.

 Included below are code examples utilizing the GSSName interface.
 The code below creates a GSSName, converts it to an MN, performs a
 comparison, obtains a printable representation of the name, exports it
 to a byte array and then re-imports to obtain a
 new GSSName.
 
```

      GSSManager manager = GSSManager.getInstance();

      // create a host based service name
      GSSName name = manager.createName("service@host",
                   GSSName.NT_HOSTBASED_SERVICE);

      Oid krb5 = new Oid("1.2.840.113554.1.2.2");

      GSSName mechName = name.canonicalize(krb5);

      // the above two steps are equivalent to the following
      GSSName mechName = manager.createName("service@host",
                      GSSName.NT_HOSTBASED_SERVICE, krb5);

      // perform name comparison
      if (name.equals(mechName))
              print("Names are equals.");

      // obtain textual representation of name and its printable
      // name type
      print(mechName.toString() +
                      mechName.getStringNameType().toString());

      // export and re-import the name
      byte [] exportName = mechName.export();

      // create a new name object from the exported buffer
      GSSName newName = manager.createName(exportName,
                      GSSName.NT_EXPORT_NAME);

 
```

**参见**

- #export()
- #equals(GSSName)
- GSSManager#createName(String, Oid)
- GSSManager#createName(String, Oid, Oid)
- GSSManager#createName(byte[], Oid)

> *Since 1.4*
