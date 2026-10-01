---
id: "zh-php-function-function-get-extension-funcs"
language: "php"
lang: "zh"
category: "function"
name: "get_extension_funcs"
title: "返回模块函数名称的数组"
signature: "array|false get_extension_funcs(string $extension)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-extension-funcs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回模块函数名称的数组

## 说明

```php
array|false get_extension_funcs(string $extension)
```

该函数根据 `$extension` 返回模块内定义的所有函数的名称。

## 参数

- **`$extension`** — 模块名称。
  > 这个参数必须是*小写（lowercase）*的。



## 返回值

返回包含所有函数名的数组，如果 `$extension` 不是一个有效的扩展则返回 `false`。

## 示例

**打印 XML 函数**

```php


<?php
print_r(get_extension_funcs("xml"));
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => xml_parser_create
    [1] => xml_parser_create_ns
    [2] => xml_set_object
    [3] => xml_set_element_handler
    [4] => xml_set_character_data_handler
    [5] => xml_set_processing_instruction_handler
    [6] => xml_set_default_handler
    [7] => xml_set_unparsed_entity_decl_handler
    [8] => xml_set_notation_decl_handler
    [9] => xml_set_external_entity_ref_handler
    [10] => xml_set_start_namespace_decl_handler
    [11] => xml_set_end_namespace_decl_handler
    [12] => xml_parse
    [13] => xml_parse_into_struct
    [14] => xml_get_error_code
    [15] => xml_error_string
    [16] => xml_get_current_line_number
    [17] => xml_get_current_column_number
    [18] => xml_get_current_byte_index
    [19] => xml_parser_free
    [20] => xml_parser_set_option
    [21] => xml_parser_get_option
)

    
```

## 参见

`get_loaded_extensions()` `ReflectionExtension::getFunctions()`
