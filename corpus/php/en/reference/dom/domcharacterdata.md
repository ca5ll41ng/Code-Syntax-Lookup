---
id: "en-php-guide-class-domcharacterdata"
language: "php"
lang: "en"
category: "guide"
name: "class.domcharacterdata"
title: "The DOMCharacterData class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domcharacterdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMCharacterData class

DOMCharacterData

   Introduction  Represents nodes with character data. No nodes directly correspond to this class, but other nodes do inherit from it.      Class Synopsis    `DOMCharacterData`   `extends` `DOMNode`   `implements` DOMChildNode      `public` `string` `data`   `public` `readonly` `int` `length`   `public` `readonly` `DOMElement|null` `previousElementSibling`   `public` `readonly` `DOMElement|null` `nextElementSibling`             Properties 
- **`data`** — The contents of the node.
- **`length`** — The length of the contents.
- **`nextElementSibling`** — The next sibling element or `null`.
- **`previousElementSibling`** — The previous sibling element or `null`.

    Changelog 
|  |  |
| --- | --- |
| 8.0.0 | The `nextElementSibling` and `previousElementSibling` properties have been added. |
| 8.0.0 | `DOMCharacterData` implements DOMChildNode now. |

   See Also   [W3C specification of CharacterData]()
