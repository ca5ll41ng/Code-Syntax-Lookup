---
id: "en-php-guide-class-domdocument"
language: "php"
lang: "en"
category: "guide"
name: "class.domdocument"
title: "The DOMDocument class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domdocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMDocument class

DOMDocument

   Introduction  Represents an entire HTML or XML document; serves as the root of the document tree.      Class Synopsis    `DOMDocument`   `extends` `DOMNode`   `implements` DOMParentNode      `public` `readonly` `DOMDocumentType|null` `doctype`   `public` `readonly` `DOMImplementation` `implementation`   `public` `readonly` `DOMElement|null` `documentElement`   `public` `readonly` `string|null` `actualEncoding`   `public` `string|null` `encoding`   `public` `readonly` `string|null` `xmlEncoding`   `public` `bool` `standalone`   `public` `bool` `xmlStandalone`   `public` `string|null` `version`   `public` `string|null` `xmlVersion`   `public` `bool` `strictErrorChecking`   `public` `string|null` `documentURI`   `public` `readonly` `mixed` `config`   `public` `bool` `formatOutput`   `public` `bool` `validateOnParse`   `public` `bool` `resolveExternals`   `public` `bool` `preserveWhiteSpace`   `public` `bool` `recover`   `public` `bool` `substituteEntities`   `public` `readonly` `DOMElement|null` `firstElementChild`   `public` `readonly` `DOMElement|null` `lastElementChild`   `public` `readonly` `int` `childElementCount`              Properties 
- **`actualEncoding`** — *Deprecated as of PHP 8.4.0*. Actual encoding of the document, is a readonly equivalent to `encoding`.
- **`childElementCount`** — The number of child elements.
- **`config`** — *Deprecated as of PHP 8.4.0*. Configuration used when `DOMDocument::normalizeDocument()` is invoked.
- **`doctype`** — The Document Type Declaration associated with this document.
- **`documentElement`** — The `DOMElement` object that is the first document element. If not found, this evaluates to `null`.
- **`documentURI`** — The location of the document or `null` if undefined.
- **`encoding`** — Encoding of the document, as specified by the XML declaration. This attribute is not present in the final DOM Level 3 specification, but is the only way of manipulating XML document encoding in this implementation.
- **`firstElementChild`** — First child element or `null`.
- **`formatOutput`** — Nicely formats output with indentation and extra space. This has no effect if the document was loaded with `preserveWhitespace` enabled.
- **`implementation`** — The `DOMImplementation` object that handles this document.
- **`lastElementChild`** — Last child element or `null`.
- **`preserveWhiteSpace`** — Do not remove redundant white space. Default to `true`. Setting this to `false` has the same effect as passing `LIBXML_NOBLANKS` as `$option` to `DOMDocument::load()` etc.
- **`recover`** — *Proprietary*. Enables recovery mode, i.e. trying to parse non-well formed documents. This attribute is not part of the DOM specification and is specific to libxml.
- **`resolveExternals`** — Set it to `true` to load external entities from a doctype declaration. This is useful for including character entities in your XML document.
- **`standalone`** — *Deprecated*. Whether or not the document is standalone, as specified by the XML declaration, corresponds to `xmlStandalone`.
- **`strictErrorChecking`** — Throws `DOMException` on errors. Default to `true`.
- **`substituteEntities`** — *Proprietary*. Whether or not to substitute entities. This attribute is not part of the DOM specification and is specific to libxml. Default to `false`.
  > Enabling entity substitution may facilitate XML External Entity (XXE) attacks.

- **`validateOnParse`** — Loads and validates against the DTD. Default to `false`.
  > Enabling validating the DTD may facilitate XML External Entity (XXE) attacks.

- **`version`** — *Deprecated*. Version of XML, corresponds to `xmlVersion`.
- **`xmlEncoding`** — An attribute specifying, as part of the XML declaration, the encoding of this document. This is `null` when unspecified or when it is not known, such as when the Document was created in memory.
- **`xmlStandalone`** — An attribute specifying, as part of the XML declaration, whether this document is standalone. This is `false` when unspecified. A standalone document is one where there are no external markup declarations. An example of such a markup declaration is when the DTD declares an attribute with a default value.
- **`xmlVersion`** — An attribute specifying, as part of the XML declaration, the version number of this document. If there is no declaration and if this document supports the "XML" feature, the value is "1.0".

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | `actualEncoding` and `config` are formally deprecated now. |
| 8.0.0 | `DOMDocument` implements DOMParentNode now. |
| 8.0.0 | The unimplemented method `DOMDocument::renameNode()` has been removed. |

    Notes 
> The DOM extension uses UTF-8 encoding. Use `mb_convert_encoding()`, `UConverter::transcode()`, or `iconv()` to handle other encodings.

 
> When using `json_encode()` on a `DOMDocument` object the result will be that of encoding an empty object.

     See Also   [W3C specification for Document]()
