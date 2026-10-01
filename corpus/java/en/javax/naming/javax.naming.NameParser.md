---
id: "java-en-function-javax-naming-nameparser"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NameParser"
title: "NameParser"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameParser

This interface is used for parsing names from a hierarchical
 namespace.  The NameParser contains knowledge of the syntactic
 information (like left-to-right orientation, name separator, etc.)
 needed to parse names.

 The equals() method, when used to compare two NameParsers, returns
 true if and only if they serve the same namespace.

**参见**

- CompoundName
- Name

> *Since 1.3*
