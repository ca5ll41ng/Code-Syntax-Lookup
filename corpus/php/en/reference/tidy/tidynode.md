---
id: "en-php-guide-class-tidynode"
language: "php"
lang: "en"
category: "guide"
name: "class.tidynode"
title: "The `tidyNode` class"
module: "tidy"
source_url: "https://www.php.net/manual/en/class.tidynode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The `tidyNode` class

tidyNode

   Introduction  An HTML node in an HTML file, as detected by tidy.      Class Synopsis    `final` `tidyNode`    `public` `readonly` `string` `value`   `public` `readonly` `string` `name`   `public` `readonly` `int` `type`   `public` `readonly` `int` `line`   `public` `readonly` `int` `column`   `public` `readonly` `bool` `proprietary`   `public` `readonly` `int|null` `id`   `public` `readonly` `array|null` `attribute`   `public` `readonly` `array|null` `child`          Properties 
- **`value`** — The HTML representation of the node, including the surrounding tags.
- **`name`** — The name of the HTML node
- **`type`** — The type of the node (one of the nodetype constants, e.g. `TIDY_NODETYPE_PHP`)
- **`line`** — The line number at which the tags is located in the file
- **`column`** — The column number at which the tags is located in the file
- **`proprietary`** — Indicates if the node is a proprietary tag
- **`id`** — The ID of the node (one of the tag constants, e.g. `TIDY_TAG_FRAME`)
- **`attribute`** — An array of string, representing the attributes names (as keys) of the current node.
- **`child`** — An array of `tidyNode`, representing the children of the current node.
