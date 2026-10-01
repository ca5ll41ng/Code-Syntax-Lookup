---
id: "en-php-guide-class-xmlreader"
language: "php"
lang: "en"
category: "guide"
name: "class.xmlreader"
title: "The XMLReader class"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/class.xmlreader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The XMLReader class

XMLReader

   Introduction  The XMLReader extension is an XML Pull parser. The reader acts as a cursor going forward on the document stream and stopping at each node on the way.      Class Synopsis    `XMLReader`    `public` `const` `int` `XMLReader::NONE`   `public` `const` `int` `XMLReader::ELEMENT`   `public` `const` `int` `XMLReader::ATTRIBUTE`   `public` `const` `int` `XMLReader::TEXT`   `public` `const` `int` `XMLReader::CDATA`   `public` `const` `int` `XMLReader::ENTITY_REF`   `public` `const` `int` `XMLReader::ENTITY`   `public` `const` `int` `XMLReader::PI`   `public` `const` `int` `XMLReader::COMMENT`   `public` `const` `int` `XMLReader::DOC`   `public` `const` `int` `XMLReader::DOC_TYPE`   `public` `const` `int` `XMLReader::DOC_FRAGMENT`   `public` `const` `int` `XMLReader::NOTATION`   `public` `const` `int` `XMLReader::WHITESPACE`   `public` `const` `int` `XMLReader::SIGNIFICANT_WHITESPACE`   `public` `const` `int` `XMLReader::END_ELEMENT`   `public` `const` `int` `XMLReader::END_ENTITY`   `public` `const` `int` `XMLReader::XML_DECLARATION`   `public` `const` `int` `XMLReader::LOADDTD`   `public` `const` `int` `XMLReader::DEFAULTATTRS`   `public` `const` `int` `XMLReader::VALIDATE`   `public` `const` `int` `XMLReader::SUBST_ENTITIES`    `public` `int` `attributeCount`   `public` `string` `baseURI`   `public` `int` `depth`   `public` `bool` `hasAttributes`   `public` `bool` `hasValue`   `public` `bool` `isDefault`   `public` `bool` `isEmptyElement`   `public` `string` `localName`   `public` `string` `name`   `public` `string` `namespaceURI`   `public` `int` `nodeType`   `public` `string` `prefix`   `public` `string` `value`   `public` `string` `xmlLang`         Properties 
- **`attributeCount`** — The number of attributes on the node
- **`baseURI`** — The base URI of the node
- **`depth`** — Depth of the node in the tree, starting at 0
- **`hasAttributes`** — Indicates if node has attributes
- **`hasValue`** — Indicates if node has a text value
- **`isDefault`** — Indicates if attribute is defaulted from DTD
- **`isEmptyElement`** — Indicates if node is an empty element tag
- **`localName`** — The local name of the node
- **`name`** — The qualified name of the node
- **`namespaceURI`** — The URI of the namespace associated with the node
- **`nodeType`** — The node type for the node
- **`prefix`** — The prefix of the namespace associated with the node
- **`value`** — The text value of the node
- **`xmlLang`** — The xml:lang scope which the node resides

     Predefined Constants  XMLReader Node Types 
- **`XMLReader::NONE`** — No node type
- **`XMLReader::ELEMENT`** — Start element
- **`XMLReader::ATTRIBUTE`** — Attribute node
- **`XMLReader::TEXT`** — Text node
- **`XMLReader::CDATA`** — CDATA node
- **`XMLReader::ENTITY_REF`** — Entity Reference node
- **`XMLReader::ENTITY`** — Entity Declaration node
- **`XMLReader::PI`** — Processing Instruction node
- **`XMLReader::COMMENT`** — Comment node
- **`XMLReader::DOC`** — Document node
- **`XMLReader::DOC_TYPE`** — Document Type node
- **`XMLReader::DOC_FRAGMENT`** — Document Fragment node
- **`XMLReader::NOTATION`** — Notation node
- **`XMLReader::WHITESPACE`** — Whitespace node
- **`XMLReader::SIGNIFICANT_WHITESPACE`** — Significant Whitespace node
- **`XMLReader::END_ELEMENT`** — End Element
- **`XMLReader::END_ENTITY`** — End Entity
- **`XMLReader::XML_DECLARATION`** — XML Declaration node

   XMLReader Parser Options 
- **`XMLReader::LOADDTD`** — Load DTD but do not validate
- **`XMLReader::DEFAULTATTRS`** — Load DTD and default attributes but do not validate
- **`XMLReader::VALIDATE`** — Load DTD and validate while parsing
- **`XMLReader::SUBST_ENTITIES`** — Substitute entities and expand references

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
