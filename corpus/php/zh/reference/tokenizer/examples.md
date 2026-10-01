---
id: "zh-php-guide-tokenizer-examples"
language: "php"
lang: "zh"
category: "guide"
name: "tokenizer.examples"
title: "示例"
module: "tokenizer"
source_url: "https://www.php.net/manual/zh/tokenizer.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

这是使用 tokenizer 的简单 PHP 脚本示例，它将读取 PHP 文件，去掉代码中全部注释，然后只打印纯代码。

**使用 tokenizer 去除注释**

```php


<?php
$source = file_get_contents('example.php');
$tokens = token_get_all($source);

foreach ($tokens as $token) {
   if (is_string($token)) {
       // simple 1-character token
       echo $token;
   } else {
       // token array
       list($id, $text) = $token;

       switch ($id) { 
           case T_COMMENT: 
           case T_DOC_COMMENT:
               // no action on comments
               break;

           default:
               // anything else -> output "as is"
               echo $text;
               break;
       }
   }
}
?>

  
```
