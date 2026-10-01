---
id: "en-php-guide-dom-constants"
language: "php"
lang: "en"
category: "guide"
name: "dom.constants"
title: "Predefined Constants"
module: "dom"
source_url: "https://www.php.net/manual/en/dom.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

|  | Value |  |
| --- | --- | --- |
| `XML_ELEMENT_NODE` (`int`) | 1 | Node is a `DOMElement` / `Dom\Element` |
| `XML_ATTRIBUTE_NODE` (`int`) | 2 | Node is a `DOMAttr` / `Dom\Attr` |
| `XML_TEXT_NODE` (`int`) | 3 | Node is a `DOMText` / `Dom\Text` |
| `XML_CDATA_SECTION_NODE` (`int`) | 4 | Node is a `DOMCharacterData` / `Dom\CharacterData` |
| `XML_ENTITY_REF_NODE` (`int`) | 5 | Node is a `DOMEntityReference` / `Dom\EntityReference` |
| `XML_ENTITY_NODE` (`int`) | 6 | Node is a `DOMEntity` / `Dom\Entity` |
| `XML_PI_NODE` (`int`) | 7 | Node is a `DOMProcessingInstruction` / `Dom\ProcessingInstruction` |
| `XML_COMMENT_NODE` (`int`) | 8 | Node is a `DOMComment` / `Dom\Comment` |
| `XML_DOCUMENT_NODE` (`int`) | 9 | Node is a `DOMDocument` / `Dom\Document` |
| `XML_DOCUMENT_TYPE_NODE` (`int`) | 10 | Node is a `DOMDocumentType` / `Dom\DocumentType` |
| `XML_DOCUMENT_FRAG_NODE` (`int`) | 11 | Node is a `DOMDocumentFragment` / `Dom\DocumentFragment` |
| `XML_NOTATION_NODE` (`int`) | 12 | Node is a `DOMNotation` / `Dom\Notation` |
| `XML_HTML_DOCUMENT_NODE` (`int`) | 13 |  |
| `XML_DTD_NODE` (`int`) | 14 |  |
| `XML_ELEMENT_DECL_NODE` (`int`) | 15 |  |
| `XML_ATTRIBUTE_DECL_NODE` (`int`) | 16 |  |
| `XML_ENTITY_DECL_NODE` (`int`) | 17 |  |
| `XML_NAMESPACE_DECL_NODE` (`int`) | 18 |  |
| `XML_ATTRIBUTE_CDATA` (`int`) | 1 |  |
| `XML_ATTRIBUTE_ID` (`int`) | 2 |  |
| `XML_ATTRIBUTE_IDREF` (`int`) | 3 |  |
| `XML_ATTRIBUTE_IDREFS` (`int`) | 4 |  |
| `XML_ATTRIBUTE_ENTITY` (`int`) | 5 |  |
| `XML_ATTRIBUTE_NMTOKEN` (`int`) | 7 |  |
| `XML_ATTRIBUTE_NMTOKENS` (`int`) | 8 |  |
| `XML_ATTRIBUTE_ENUMERATION` (`int`) | 9 |  |
| `XML_ATTRIBUTE_NOTATION` (`int`) | 10 |  |
| `XML_LOCAL_NAMESPACE` (`int`) |  | A namespace declaration node. |

|  |  |
| --- | --- |
| `Dom\HTML_NO_DEFAULT_NS` (`int`) | This disables setting the namespace of elements during parsing when using `Dom\HTMLDocument`. This exists for backwards compatibility with `DOMDocument`.   
> Some DOM methods depend on the HTML namespace being set. By using this parser option, the behaviour of those methods can be influenced. |

|  | Value |  |
| --- | --- | --- |
| `DOM_PHP_ERR` (`int`) | 0 | Error code not part of the DOM specification. Meant for PHP errors. Deprecated as of PHP 8.4.0 because this is no longer used. Prior to PHP 8.4.0, this was inconsistently used to indicate out-of-memory situations. |
| `DOM_INDEX_SIZE_ERR` / `Dom\INDEX_SIZE_ERR` (`int`) | 1 | If index or size is negative, or greater than the allowed value. |
| `DOMSTRING_SIZE_ERR` / `Dom\STRING_SIZE_ERR` (`int`) | 2 | If the specified range of text does not fit into a `string`. |
| `DOM_HIERARCHY_REQUEST_ERR` / `Dom\HIERARCHY_REQUEST_ERR` (`int`) | 3 | If any node is inserted somewhere it doesn't belong |
| `DOM_WRONG_DOCUMENT_ERR` / `Dom\WRONG_DOCUMENT_ERR` (`int`) | 4 | If a node is used in a different document than the one that created it. |
| `DOM_INVALID_CHARACTER_ERR` / `Dom\INVALID_CHARACTER_ERR` (`int`) | 5 | If an invalid or illegal character is specified, such as in a name. |
| `DOM_NO_DATA_ALLOWED_ERR` / `Dom\NO_DATA_ALLOWED_ERR` (`int`) | 6 | If data is specified for a node which does not support data. |
| `DOM_NO_MODIFICATION_ALLOWED_ERR` / `Dom\NO_MODIFICATION_ALLOWED_ERR` (`int`) | 7 | If an attempt is made to modify an object where modifications are not allowed. |
| `DOM_NOT_FOUND_ERR` / `Dom\NOT_FOUND_ERR` (`int`) | 8 | If an attempt is made to reference a node in a context where it does not exist. |
| `DOM_NOT_SUPPORTED_ERR` / `Dom\NOT_SUPPORTED_ERR` (`int`) | 9 | If the implementation does not support the requested type of object or operation. |
| `DOM_INUSE_ATTRIBUTE_ERR` / `Dom\INUSE_ATTRIBUTE_ERR` (`int`) | 10 | If an attempt is made to add an attribute that is already in use elsewhere. |
| `DOM_INVALID_STATE_ERR` / `Dom\INVALID_STATE_ERR` (`int`) | 11 | If an attempt is made to use an object that is not, or is no longer, usable. |
| `DOM_SYNTAX_ERR` / `Dom\SYNTAX_ERR` (`int`) | 12 | If an invalid or illegal string is specified. |
| `DOM_INVALID_MODIFICATION_ERR` / `Dom\INVALID_MODIFICATION_ERR` (`int`) | 13 | If an attempt is made to modify the type of the underlying object. |
| `DOM_NAMESPACE_ERR` / `Dom\NAMESPACE_ERR` (`int`) | 14 | If an attempt is made to create or change an object in a way which is incorrect with regard to namespaces. |
| `DOM_INVALID_ACCESS_ERR` / `Dom\INVALID_ACCESS_ERR` (`int`) | 15 | If a parameter or an operation is not supported by the underlying object. |
| `DOM_VALIDATION_ERR` / `Dom\VALIDATION_ERR` (`int`) | 16 | If a call to a method such as insertBefore or removeChild would make the Node invalid with respect to "partial validity", this exception would be raised and the operation would not be done. |
