---
id: "java-en-function-org-w3c-dom-characterdata"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.CharacterData"
title: "CharacterData"
directive: "type"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData

The CharacterData interface extends Node with a set of
 attributes and methods for accessing character data in the DOM. For
 clarity this set is defined here rather than on each object that uses
 these attributes and methods. No DOM objects correspond directly to
 CharacterData, though Text and others do
 inherit the interface from it. All offsets in this interface
 start from 0.
 

As explained in the DOMString interface, text strings in
 the DOM are represented in UTF-16, i.e. as a sequence of 16-bit units. In
 the following, the term 16-bit units is used whenever necessary to
 indicate that indexing on CharacterData is done in 16-bit units.
 

See also the Document Object Model (DOM) Level 3 Core Specification.

> *Since 1.4, DOM Level 2*
