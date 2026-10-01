---
id: "en-php-guide-class-domprocessinginstruction"
language: "php"
lang: "en"
category: "guide"
name: "class.domprocessinginstruction"
title: "The DOMProcessingInstruction class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domprocessinginstruction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMProcessingInstruction class

DOMProcessingInstruction

  Introduction  This represents a processing instruction (PI) node. These are meant to indicate data areas meant for processing by specific applications.     Class Synopsis    `DOMProcessingInstruction`   `extends` `DOMNode`      `public` `readonly` `string` `target`   `public` `string` `data`             Properties 
- **`target`** — A string representing to what application the data is intended for.
- **`data`** — Application-specific data.
